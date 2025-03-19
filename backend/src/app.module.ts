import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './modules/employee/employee.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';  // ✅ Ensure correct path


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost:27017/employee_db'),
    EmployeeModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
