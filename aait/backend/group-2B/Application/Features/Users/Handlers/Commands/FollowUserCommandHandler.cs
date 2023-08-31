using Application.Features.Users.Requests.Commands;
using AutoMapper;
using MediatR;
using SocialSync.Application.Common.Responses;
using SocialSync.Application.Contracts.Persistence;
using SocialSync.Application.DTOs.Users.Validators;

namespace Applicatin.Features.Users.Handlers.Commands;

public class FollowUserCommandHandler
    : IRequestHandler<FollowUserCommandRequest, CommonResponse<int>>
{
    private readonly IUnitOfWork _unitOfWork;
    private IMapper _mapper;

    public FollowUserCommandHandler(IMapper mapper, IUnitOfWork unitOfWork)
    {
        _mapper = mapper;
        _unitOfWork = unitOfWork;
    }

    public async Task<CommonResponse<int>> Handle(
        FollowUserCommandRequest request,
        CancellationToken cancellationToken
    )
    {
        var validator = new FollowDtoValidator(_unitOfWork);
        var vallidationResult = await validator.ValidateAsync(request.FollowUnfollowDto);

        if (!vallidationResult.IsValid)
            return CommonResponse<int>.Failure("Follow user action failed.");

        await _unitOfWork.UserRepository.FollowUser(
            request.FollowUnfollowDto.FollwerId,
            request.FollowUnfollowDto.FollowedId
        );

        var status = await _unitOfWork.SaveAsync();
        if (status < 0)
            return CommonResponse<int>.Failure("Follow user action failed.");

        return new CommonResponse<int> { IsSuccess = true, Error = "" };
    }
}
