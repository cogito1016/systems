import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserRequestDto {
  @ApiProperty({
    example: 'jayden@naver.com',
    description: '이메일',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '1234',
    description: '비밀번호',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'jayden',
    description: '이름',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
