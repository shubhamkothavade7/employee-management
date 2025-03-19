import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name!: string; // ✅ Fix: Using "!" to tell TypeScript it's initialized at runtime

  @IsString()
  @IsNotEmpty()
  role!: string;

  @IsNotEmpty()
  salary!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;
}
