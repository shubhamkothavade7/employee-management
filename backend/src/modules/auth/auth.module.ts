import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/user.schema';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';  // ✅ Import JwtModule
import { PassportModule } from '@nestjs/passport'; // ✅ Import Passport for authentication
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule, // ✅ Required for authentication
    JwtModule.register({
      secret: 'f1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3', // ✅ Define JWT secret
      signOptions: { expiresIn: '1h' }, // ✅ Token expiration
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService,JwtStrategy, JwtAuthGuard],
  exports: [AuthService, JwtAuthGuard],
})
export class AuthModule {}
