import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/user/user.repository';
import { User } from '@app/user/user.schema';

@Injectable()
export class CatCommunityService {
  constructor(private readonly userRepository: UserRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    const users = await this.userRepository.findAll();
    return users.map((user) => user.readOnlyData);
  }

  async updateProfileImageById(user: User, fileName: string) {
    const findedUser = await this.userRepository.findOneById(user._id);
    findedUser.imgUrl = 'user/' + fileName;
    const newUser = await findedUser.save();
    return newUser.readOnlyData;
  }
}
