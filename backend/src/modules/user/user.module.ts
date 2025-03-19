import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // ✅ Register Model Here
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // ✅ Export if used in AuthModule
})
export class UserModule {}
