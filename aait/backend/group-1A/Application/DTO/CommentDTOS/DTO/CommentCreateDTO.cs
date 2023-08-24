using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTO.CommentDTO.DTO
{
    public class CommentCreateDTO : IBaseCommentDTO
    {
        public string Message { get; set; } = null!;
        public int UserId { get; set; }
        public int PostId { get; set; }
    }
}