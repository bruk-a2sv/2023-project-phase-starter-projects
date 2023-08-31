using Application.DTOs.Users.Validators;
using Application.Features.Users.Requests.Commands;
using MediatR;
using SocialSync.Application.Common.Responses;
using SocialSync.Application.Contracts.Persistence;

namespace Application.Features.Users.Handlers.Commands;

public class UserDeleteCommandHandler
    : IRequestHandler<UserDeleteCommandRequest, CommonResponse<int>>
{
    private readonly IUnitOfWork _unitOfWork;

    public UserDeleteCommandHandler(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task<CommonResponse<int>> Handle(
        UserDeleteCommandRequest request,
        CancellationToken cancellationToken
    )
    {
        var validator = new UserDeleteDtoValidator(_unitOfWork);
        var validateResult = await validator.ValidateAsync(request.UserdeleteDto);

        if (!validateResult.IsValid)
            return CommonResponse<int>.Failure("Unable to delete user account.");

        var user = await _unitOfWork.UserRepository.GetAsync(request.UserdeleteDto.Id);
        await _unitOfWork.UserRepository.DeleteAsync(user);

        var status = await _unitOfWork.SaveAsync();
        if (status < 0)
            return CommonResponse<int>.Failure("Unable to delete user account.");

        return new CommonResponse<int> { IsSuccess = true, Error = "" };
    }
}
