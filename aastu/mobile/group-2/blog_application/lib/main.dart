import 'package:blog_application/features/blog/presentation/screens/profile_screen.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'features/blog/presentation/screens/home_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        
        colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF376AED)),
        fontFamily: GoogleFonts.poppins().fontFamily,
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,

      home: const ProfileScreen(),
    );
  }
}
