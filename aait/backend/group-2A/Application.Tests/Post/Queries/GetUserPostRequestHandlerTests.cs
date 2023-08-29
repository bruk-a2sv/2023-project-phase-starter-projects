﻿using Application.Contracts.Persistance;
using Application.DTO.Post;
using Application.Features.Post.Handlers.Queries;
using Application.Features.Post.Request.Queries;
using Application.Profiles;
using Application.Responses;
using Application.Tests.Mocks;
using AutoMapper;
using Moq;
using Shouldly;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Tests.Post.Queries
{
    public class GetUserPostRequestHandlerTests
    {
        private readonly IMapper _mapper;
        private readonly Mock<IUnitOfWork> _mockRepo;

        public GetUserPostRequestHandlerTests()
        {
            _mockRepo = MockCommentRepository.GetCommentRepository();

            var mapperConfig = new MapperConfiguration(c =>
            {
                c.AddProfile<MappingProfile>();
            });

            _mapper = mapperConfig.CreateMapper();
        }

        [Fact]
        public async Task GetUserPost_ValidUserId_ReturnsUserPosts()
        {
            var handler = new GetUserPostRequestHandler(_mockRepo.Object, _mapper);

            var result = await handler.Handle(new GetUserPostRequest() { Id = 1 }, CancellationToken.None);

            result.ShouldNotBeNull();
            result.ShouldBeOfType<BaseCommandResponse<List<PostDto>>>();
            result.Value.ShouldNotBeNull();
            result.Value.ShouldBeAssignableTo<IEnumerable<PostDto>>();
            result.Value.All(post => post.UserId == 1).ShouldBeTrue();
        }

        [Fact]
        public async Task GetUserPost_InvalidUserId_ReturnsEmptyList()
        {
            var handler = new GetUserPostRequestHandler(_mockRepo.Object, _mapper);

            var result = await handler.Handle(new GetUserPostRequest() { Id = 999 }, CancellationToken.None);

            result.ShouldNotBeNull();
            result.ShouldBeOfType<BaseCommandResponse<List<PostDto>>>();
            result.Value.ShouldNotBeNull();
            result.Value.ShouldBeEmpty();
        }

        [Fact]
        public async Task GetUserPost_RepositoryError_Failure()
        {
            _mockRepo.Setup(repo => repo.postRepository.GetUserPost(It.IsAny<int>())).ThrowsAsync(new Exception("Simulated error"));
            var handler = new GetUserPostRequestHandler(_mockRepo.Object, _mapper);

            var result = await handler.Handle(new GetUserPostRequest() { Id = 1 }, CancellationToken.None);

            result.ShouldNotBeNull();
            result.ShouldBeOfType<BaseCommandResponse<List<PostDto>>>();
            result.Success.ShouldBeFalse();
            result.Value.ShouldBeEmpty();
        }
    }
}
