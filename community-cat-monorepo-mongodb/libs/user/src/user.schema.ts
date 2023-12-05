import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class User {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  name: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  imgUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
