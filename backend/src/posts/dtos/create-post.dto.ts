import { IsNumber, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsNumber()
  userId: number;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  body?: string;
}
