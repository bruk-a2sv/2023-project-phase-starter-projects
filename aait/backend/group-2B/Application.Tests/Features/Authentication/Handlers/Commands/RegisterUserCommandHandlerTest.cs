using AutoMapper;
using HRLeaveManagement.Application.Profiles;
using Microsoft.Extensions.Options;
using Moq;
using Shouldly;
using SocialSync.Application.Contracts.Infrastructure;
using SocialSync.Application.Contracts.Persistence;
using SocialSync.Application.DTOs.Authentication;
using SocialSync.Application.Features.Authentication.Handlers.Queries;
using SocialSync.Application.Features.Authentication.Requests.Commands;
using SocialSync.Application.Tests.Mocks;
using SocialSync.Infrastructure.DateTimeService;
using SocialSync.Infrastructure.JWT;
using SocialSync.Infrastructure.PasswordService;

namespace SocialSync.Application.Tests.Features.Authentication.Handlers.Commands;

public class RegisterUserCommandHandlerTest
{
    private readonly IMapper _mapper;
    private readonly Mock<IUnitOfWork> _mockUnitOfWork;
    private readonly RegisterUserCommandHandler _handler;
    private readonly IJwtGenerator _jwtGenerator;
    private readonly IPasswordHasher _passwordHasher;

    public RegisterUserCommandHandlerTest()
    {
        var mapperConfig = new MapperConfiguration(c =>
        {
            c.AddProfile<AuthenticationMappingProfile>();
        });
        var jwtSettings = new JwtSettings
        {
            Secret = "Social-Sync-JWT-Secret-and-then-some",
            Issuer = "SocialSync",
            Audience = "SocialSync",
            ExpiryMinutes = 60
        };
        var jwtOptions = Options.Create(jwtSettings);
        _mapper = mapperConfig.CreateMapper();
        _mockUnitOfWork = MockUnitOfWork.GetMockUnitOfWork();
        _jwtGenerator = new JwtGenerator(new DateTimeProvider(), jwtOptions);
        _passwordHasher = new PasswordHasher();
        _handler = new RegisterUserCommandHandler(
            _mockUnitOfWork.Object,
            _jwtGenerator,
            _mapper,
            _passwordHasher
        );
    }

    [Fact]
    public async Task Valid_RegisterNewUser()
    {
        var newUser = new RegisterUserDto
        {
            FirstName = "User4",
            LastName = "User4",
            Email = "User4@gmail.com",
            Username = "User4",
            Password = "User4password",
            Phone = "1234567890",
        };

        var result = await _handler.Handle(
            new RegisterUserCommand { RegisterUserDto = newUser },
            CancellationToken.None
        );

        var Users = await _mockUnitOfWork.Object.UserRepository.GetAsync();
        Users.Count.ShouldBe(4);
    }

    [Fact]
    public async Task Invalid_EmailRegisterNewUser()
    {
        var newUser = new RegisterUserDto
        {
            FirstName = "User4",
            LastName = "User4",
            Email = "User4", // Not an email
            Username = "User4",
            Password = "User4password",
            Phone = "1234567890",
        };

        var result = await _handler.Handle(
            new RegisterUserCommand { RegisterUserDto = newUser },
            CancellationToken.None
        );

        var Users = await _mockUnitOfWork.Object.UserRepository.GetAsync();
        Users.Count.ShouldBe(3);
    }

    [Fact]
    public async Task Invalid_DuplicateEmailRegisterNewUsew()
    {
        var newUser = new RegisterUserDto
        {
            FirstName = "User4",
            LastName = "User4",
            Email = "User4@gmail.com",
            Username = "User4",
            Password = "User4password",
            Phone = "1234567890",
        };

        var result = await _handler.Handle(
            new RegisterUserCommand { RegisterUserDto = newUser },
            CancellationToken.None
        );

        newUser = new RegisterUserDto
        {
            FirstName = "User4",
            LastName = "User4",
            Email = "User4@gmail.com",
            Username = "User5",
            Password = "User4password",
            Phone = "1234567890",
        };

        await Should.ThrowAsync<Exception>(() =>
            _handler.Handle(
                new RegisterUserCommand { RegisterUserDto = newUser },
                CancellationToken.None
            )
        );

        var Users = await _mockUnitOfWork.Object.UserRepository.GetAsync();
        Users.Count.ShouldBe(4);
    }
}
