﻿using Application.Contracts;
using Application.DTO.NotificationDTO;
using Application.DTO.PostDTO.DTO;
using Application.DTO.PostDTO.validations;
using Application.Exceptions;
using Application.Features.NotificationFeaure.Requests.Commands;
using Application.Features.PostFeature.Requests.Commands;
using Application.Response;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.PostFeature.Handlers.Commands
{
    public class CreatePostHandler : IRequestHandler<CreatePostCommand, BaseResponse<PostResponseDTO>>
    {
        private readonly IMapper _mapper;
        private readonly IPostRepository _postRepository;
        private readonly IMediator _mediator;

        public CreatePostHandler(IMapper mapper, IPostRepository postRepository, IMediator mediator)
        {
            _mapper = mapper;
            _postRepository = postRepository;
            _mediator = mediator;
        }
        public async Task<BaseResponse<PostResponseDTO>> Handle(CreatePostCommand request, CancellationToken cancellationToken)
        {
            var validator = new PostCreateValidation();
            var validationResult = await validator.ValidateAsync(request.NewPostData);

            if (!validationResult.IsValid)
            {
                throw new ValidationException(validationResult);
            }

            var newPost = _mapper.Map<Post>(request.NewPostData);
            newPost.UserId = request.userId;
            var result = await _postRepository.Add(newPost);

            // notification
            var notificationData = new NotificationCreateDTO
            {
                Content = "New Post",
                NotificationContentId = result.Id,
                NotificationType = "post"
            };
            
            await _mediator.Send(new CreateNotification { UserId = request.userId, NotificationData = notificationData });

            return new BaseResponse<PostResponseDTO> {
                Success = true,
                Message = "Posts are retrieved successfully",
                Value =  _mapper.Map<PostResponseDTO>(result)
            };
        }
    }
}
