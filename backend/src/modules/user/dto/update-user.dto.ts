// src/modules/user/dto/create-user.dto.ts
import { IsString, IsNotEmpty, IsEmail, MinLength,IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;
}

