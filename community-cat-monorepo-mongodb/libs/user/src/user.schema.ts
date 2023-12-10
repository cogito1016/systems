import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import * as path from 'path';

const options: SchemaOptions = {
  timestamps: true,
  collection: 'user',
};

@Schema(options)
export class User {
  @ApiProperty({
    example: '60b0b3f6e0c0b61e2c6b2f7d',
    description: '유저 아이디',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  _id: string;

  @ApiProperty({
    example: 'jayden@naver.com',
    description: '이메일',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'jayden',
    description: '이름',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '1234',
    description: '비밀번호',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop({
    default: 'user/default.png',
  })
  @IsString()
  imgUrl: string;

  readonly readOnlyData: { email: string; name: string };
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('readOnlyData').get(function (this: User) {
  return {
    id: this._id,
    email: this.email,
    name: this.name,
    imgUrl: this.imgUrl,
  };
});
