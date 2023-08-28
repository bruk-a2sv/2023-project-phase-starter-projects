import 'package:blog_app/features/blog/domain/entities/article.dart';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import 'package:skeletons/skeletons.dart';
import 'package:cached_network_image/cached_network_image.dart';

class CustomizedCard extends StatefulWidget {
  final Article article;
  const CustomizedCard({super.key, required this.article});

  @override
  State<CustomizedCard> createState() => _CustomizedCardState();
}

class _CustomizedCardState extends State<CustomizedCard> {
  @override
  Widget build(BuildContext context) {
    String tag = "Other";
    String formattedDate = DateFormat("MMM d, y")
        .format(DateTime.parse(widget.article.createdAt!));

    if (widget.article.tags != null && widget.article.tags!.isNotEmpty) {
      tag = widget.article.tags![0];
    }

    return Padding(
        padding: const EdgeInsets.only(
            bottom: 10, left: 10, right: 10), // Adjust the padding as needed
        child: InkWell(
          onTap: () {
            Navigator.pushNamed(context, '/viewBlog');
          },
          child: Container(
            height: 175,
            width: double.infinity,
            padding: const EdgeInsets.fromLTRB(15, 5, 15, 5),
            decoration: BoxDecoration(
              color: Colors.white, // Set the background color
              borderRadius: BorderRadius.circular(10), // Set the border radius
              boxShadow: const [
                BoxShadow(
                  color: Color.fromRGBO(149, 157, 165, 0.2),
                  blurRadius: 24,
                  offset: Offset(0, 8),
                ),
              ],
            ),
            child: Column(
              children: <Widget>[
                Expanded(
                  child: Row(
                    children: <Widget>[
                      Card(
                        margin: const EdgeInsets.all(0),
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                        clipBehavior: Clip.antiAliasWithSaveLayer,
                        child: Stack(
                          children: [
                            widget.article.image != null
                                ? CachedNetworkImage(
                                    key: Key(widget.article.image!),
                                    imageUrl: widget.article.image!,
                                    height: 140,
                                    width: 130,
                                    fit: BoxFit.cover,
                                    placeholder: (context, url) => SkeletonItem(
                                      child: Container(
                                        height: double.infinity,
                                        width: double.infinity,
                                        decoration: const BoxDecoration(
                                          gradient: LinearGradient(
                                            begin: Alignment.topCenter,
                                            end: Alignment.bottomCenter,
                                            colors: [
                                              Color(0xFF222222),
                                              Color(0xFF242424),
                                              Color(0xFF2B2B2B),
                                              Color(0xFF242424),
                                              Color(0xFF222222),
                                            ],
                                          ),
                                        ),
                                      ),
                                    ),
                                  )
                                : Image.asset(
                                    "assets/images/no_image.jpg",
                                    height: 130,
                                    width: 130,
                                    fit: BoxFit.cover,
                                  ),
                            Positioned(
                              top: 6,
                              left: 7,
                              child: Container(
                                padding: const EdgeInsets.only(
                                    left: 8, right: 8, top: 2, bottom: 2),
                                decoration: BoxDecoration(
                                  color:
                                      const Color.fromARGB(255, 255, 255, 255)
                                          .withOpacity(0.9),
                                  borderRadius: const BorderRadius.only(
                                    topLeft: Radius.circular(5),
                                    bottomRight: Radius.circular(5),
                                    bottomLeft: Radius.circular(5),
                                    topRight: Radius.circular(5),
                                  ),
                                ),
                                child: const Text(
                                  "5 min read",
                                  style: TextStyle(
                                    color: Colors.black,
                                    fontSize: 10,
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Container(width: 10),
                      Expanded(
                        child: Column(
                          children: <Widget>[
                            Text(
                              "Students should work on improving their writing skill"
                                  .toUpperCase(),
                              //widget.article.title!.toUpperCase()  ,

                              maxLines: 3,
                              style: TextStyle(fontSize: 17),
                            ),
                            Container(height: 3),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.start,
                              children: [
                                ConstrainedBox(
                                  constraints: const BoxConstraints(
                                      minWidth: 55,
                                      minHeight:
                                          20), // Adjust the minWidth value as needed
                                  child: Container(
                                    padding: const EdgeInsets.only(
                                      left: 13,
                                      right: 8,
                                      top: 2,
                                      bottom: 2,
                                    ),
                                    decoration: const BoxDecoration(
                                      color: Color(0xFF5E5F6F),
                                      borderRadius: BorderRadius.all(
                                        Radius.circular(5),
                                      ),
                                    ),
                                    child: Text(
                                      tag,
                                      style: const TextStyle(
                                        color:
                                            Color.fromARGB(255, 255, 255, 255),
                                        fontSize: 10,
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            Container(height: 10),
                            Row(
                              children: <Widget>[
                                Text(
                                  "By ${widget.article.user?.fullName}",
                                ),
                              ],
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ),
                //     const Divider(height: 0)
                Container(height: 15),
                Row(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: <Widget>[
                    Text(
                      " $formattedDate",
                    ),
                  ],
                ),
                Container(height: 5),
              ],
            ),
          ),
        ));
  }
}