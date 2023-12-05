import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * Read-only data (mongodb virtual property)와 일치시킨다
 */
export class UserResponseDto {
  @ApiProperty({
    example: 'jayden@naver.com',
    description: '이메일',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: 'jayden',
    description: '이름',
    required: true,
  })
  name: string;
}
