import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '@app/user/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async isExistByEmail(email: string) {
    return this.userModel.exists({ email });
  }

  async createUser(email: string, name: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.userModel.create({
      email,
      name,
      password: hashedPassword,
    });
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findOneByIdWithoutPassword(id: string) {
    return await this.userModel.findById(id).select('-password'); //password필드제외하고 조회
  }
}
