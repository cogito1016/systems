import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User {}

export const UserSchema = SchemaFactory.createForClass(User);
