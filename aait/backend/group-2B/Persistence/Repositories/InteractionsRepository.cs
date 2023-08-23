using Microsoft.EntityFrameworkCore;
using SocialSync.Domain.Entities;
using SocialSync.Application.Contracts.Persistence;


namespace SocialSync.Persistence.Repositories;

public class InteractionRepository : GenericRepository<Interaction>, IInteractionRepository
{
    private readonly SocialSyncDbContext _context;

    public InteractionRepository(SocialSyncDbContext context)
        : base(context)
    {
        _context = context;
    }

    public async Task<List<Interaction>> GetAllCommentInteractions(int PostId)
    {
        var allComments = await _context.Interactions
            .Where(x => x.PostId == PostId && x.Type == InteractionType.Comment)
            .ToListAsync();
        return allComments;
    }

    public async Task<Interaction> likeUnlikeInteraction(Interaction interaction)
    {
        var existingInteraction = await _context.Interactions.FirstOrDefaultAsync(
            i =>
                i.UserId == interaction.UserId
                && i.PostId == interaction.PostId
                && i.Type == InteractionType.Like
        );

        if (existingInteraction != null)
        {
            _context.Interactions.Remove(existingInteraction);
        }
        else
        {
            _context.Interactions.Add(interaction);
        }

        await _context.SaveChangesAsync();
        return interaction;
    }
}