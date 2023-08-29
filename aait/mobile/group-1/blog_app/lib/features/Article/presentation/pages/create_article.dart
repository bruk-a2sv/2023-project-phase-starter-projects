import 'package:blog_app/features/Article/domain/entities/article_enitity.dart';
import 'package:blog_app/features/Article/domain/entities/create_article_entity.dart';
import 'package:blog_app/features/Article/presentation/bloc/article_bloc/article_event.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../bloc/article_bloc/article_bloc.dart';
import '../bloc/article_bloc/article_state.dart';

class ArticlePage extends StatefulWidget {
  final String? id;
  const ArticlePage({this.id});

  @override
  State<ArticlePage> createState() => _ArticlePageState();
}

class _ArticlePageState extends State<ArticlePage> {
  // @override
  // void initState() {
  //   super.initState();
  // }

  List<String> tags = [
    "Sports",
    "Tech",
    "Politics",
    "Art",
    "Design",
    "Culture",
    "Production",
    "Others",
  ];
  // List<bool> selected = List.generate(tags.length, (index) => false);
  Map<String, bool> tagsMap = {
    "Sports": false,
    "Tech": false,
    "Politics": false,
    "Art": false,
    "Design": false,
    "Culture": false,
    "Production": false,
    "Others": false,
  };

  @override
  Widget build(BuildContext context) {
    Article? initialArticle;
    bool tonalSelected = true;

    final formKey = GlobalKey<FormState>();

    final titleController = TextEditingController();
    final subTitleController = TextEditingController();
    final articleContent = TextEditingController();

    return Scaffold(
      body: BlocBuilder<ArticleBloc, ArticleState>(
        builder: (context, state) {
          if (widget.id != null) {
            final getArticle = BlocProvider.of<ArticleBloc>(context);
            getArticle.add(GetArticleEvent(widget.id!));
          }
          if (state is ArticleFetched) {
            setState(() {
              initialArticle = state.article;
              titleController.text = state.article.title;
              subTitleController.text = state.article.subTitle;
              articleContent.text = state.article.subTitle;
              for (String tag in state.article.tags) {
                tagsMap[tag] = true;
              }
            });
          }
          return SafeArea(
            child: Container(
              padding: const EdgeInsets.all(25),
              height: MediaQuery.of(context).size.height,
              child: ListView(
                children: [
                  Row(
                    children: [
                      IconButton.filledTonal(
                        isSelected: tonalSelected,
                        icon: const Icon(Icons.arrow_back_ios_new_rounded),
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width * 0.1,
                      ),
                      const Text(
                        "New Article",
                        style: TextStyle(
                            fontSize: 23, fontWeight: FontWeight.w600),
                      ),
                    ],
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.symmetric(vertical: 7, horizontal: 15),
                    child: TextFormField(
                      controller: titleController,
                      keyboardType: TextInputType.name,
                      decoration: const InputDecoration(
                        hintText: "Add title",
                        hintStyle: TextStyle(
                            color: Colors.grey,
                            fontSize: 20.0,
                            fontWeight: FontWeight.w300),
                      ),
                      style: const TextStyle(
                          color: Colors.black,
                          fontSize: 22.0,
                          fontWeight: FontWeight.w500),
                      validator: (String? name) {
                        if (name == null || name.isEmpty) {
                          return "Name can not be empty";
                        }
                        return null;
                      },
                    ),
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.symmetric(vertical: 7, horizontal: 15),
                    child: TextFormField(
                      controller: subTitleController,
                      keyboardType: TextInputType.name,
                      decoration: const InputDecoration(
                        hintText: "Add subtitle",
                        hintStyle: TextStyle(
                            color: Colors.grey,
                            fontSize: 20.0,
                            fontWeight: FontWeight.w300),
                      ),
                      style: const TextStyle(
                          color: Colors.black,
                          fontSize: 21.0,
                          fontWeight: FontWeight.w400),
                      validator: (String? name) {
                        if (name == null || name.isEmpty) {
                          return "Name can not be empty";
                        }
                        return null;
                      },
                    ),
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.symmetric(vertical: 7, horizontal: 15),
                    child: Wrap(
                        spacing: 8.0,
                        runSpacing: 4.0,
                        children: List.generate(tags.length, (index) {
                          return ChoiceChip(
                            label: Text(tags[index]),
                            selected: tagsMap[tags[index]]!,
                            onSelected: (isSelected) {
                              setState(() {
                                tagsMap[tags[index]] = isSelected;
                              });
                            },
                            elevation: 0,
                            backgroundColor: tagsMap[tags[index]]!
                                ? const Color(0xFF376AED)
                                : Colors.grey[300],
                            selectedColor: const Color(0xFF376AED),
                            labelStyle: TextStyle(
                              color: tagsMap[tags[index]]!
                                  ? Colors.white
                                  : Colors.black,
                            ),
                          );
                        })),
                  ),
                  Padding(
                    padding:
                        const EdgeInsets.symmetric(vertical: 7, horizontal: 15),
                    child: TextFormField(
                      controller: articleContent,
                      maxLines: 11,
                      keyboardType: TextInputType.name,
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(
                            borderRadius:
                                BorderRadius.all(Radius.circular(10.0)),
                            borderSide:
                                BorderSide(color: Colors.grey, width: 0)),
                        hintText: "article content",
                        hintStyle: TextStyle(
                            color: Colors.grey,
                            fontSize: 17.0,
                            fontWeight: FontWeight.w300),
                      ),
                      style: const TextStyle(
                          // Style for input text
                          color: Colors.black, // Color of input text
                          fontSize: 19.0,
                          fontWeight: FontWeight.w400 // Font size of input text
                          ),
                      validator: (String? name) {
                        if (name == null || name.isEmpty) {
                          return "Name can not be empty";
                        }
                        return null;
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                        vertical: 10, horizontal: 15),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const SizedBox(),
                        ElevatedButton(
                          onPressed: () async {
                            final formValid = formKey.currentState!.validate();
                            if (!formValid) {
                              return;
                            }

                            final bloc = BlocProvider.of<ArticleBloc>(context);
                            final tags = tagsMap.keys
                                .where((key) => tagsMap[key]!)
                                .toList();
                            CreateArticleEntity article = CreateArticleEntity(
                                id: initialArticle!.id,
                                title: titleController.text,
                                subTitle: subTitleController.text,
                                tags: tags,
                                content: articleContent.text);
                            if (widget.id != null && initialArticle != null) {
                              bloc.add(UpdateArticleEvent(article));
                            } else {
                              bloc.add(CreateArticleEvent(article));
                            }
                            Navigator.pop(context);
                          },
                          style: ButtonStyle(
                            backgroundColor: MaterialStateProperty.all<Color>(
                                const Color(0xFF376AED)),
                            shape: MaterialStateProperty.all<
                                RoundedRectangleBorder>(
                              const RoundedRectangleBorder(
                                borderRadius:
                                    BorderRadius.all(Radius.circular(50)),
                              ),
                            ),
                          ),
                          child: const Padding(
                            padding: EdgeInsets.symmetric(
                                vertical: 8.0, horizontal: 15.0),
                            child: Text(
                              style:
                                  TextStyle(fontSize: 17, color: Colors.white),
                              "Publish",
                            ),
                          ),
                        ),
                        const SizedBox()
                      ],
                    ),
                  )
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
