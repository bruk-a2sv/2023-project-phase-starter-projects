import 'package:blog_app/core/error/failure.dart';
import 'package:dartz/dartz.dart';

import '../entities/user.dart';

abstract class UserRepository {
  Future<Either<Failure, User>> registerUser({
    required String fullName,
    required String email,
    required String password,
    required String expertise,
    required String bio,
  });

  Future<Either<Failure, User>> loginUser({
    required String email,
    required String password,
  });

  Future<Either<Failure, User>> getUser(String userId);

  Future<Either<Failure, void>> updateProfilePhoto(
      String userId, String imageUrl, String imagePublicId);
}
