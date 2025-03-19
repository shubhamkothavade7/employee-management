import { IsString, IsOptional, IsNumber, IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsOptional()
  role?: string;

  @IsString()
  @IsOptional()
  salary?: string;

  @IsOptional()
  @IsEmail()  // ✅ Corrected usage
  email?: string;
}
