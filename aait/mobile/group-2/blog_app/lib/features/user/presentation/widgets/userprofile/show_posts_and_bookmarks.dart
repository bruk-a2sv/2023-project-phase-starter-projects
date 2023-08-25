import 'package:blog_app/features/user/presentation/widgets/userprofile/show_posts_or_bookmarks_button.dart';
import 'package:flutter/material.dart';

class ShowPostsAndBookmarks extends StatelessWidget {
  final int numPosts, numBookmarks;
  const ShowPostsAndBookmarks({
    Key? key,
    required this.numPosts,
    required this.numBookmarks,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Material(
      elevation: 32,
      borderRadius: BorderRadius.circular(12.0),
      child: Container(
        width: 261,
        height: 68,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12.0),
          color: Color(0xFF386BED),
        ),
        child: Row(
          children: [
            ShowPostsOrBookmarksButton(
              count: numPosts,
              col: Color(0xFF2151CD),
              typeOfChoice: 'Posts',
            ),
            ShowPostsOrBookmarksButton(
              count: numBookmarks,
              col: Color(0xFF386BED),
              typeOfChoice: 'Bookmarks',
            ),
          ],
        ),
      ),
    );
  }
}