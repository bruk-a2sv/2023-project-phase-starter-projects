class User {
  User(
      {required this.id,
      required this.fullName,
      required this.email,
      this.expertise,
      this.bio,
      this.image});
  final String id;
  final String fullName;
  final String email;
  final String? expertise;
  final String? bio;
  final String? image;
}