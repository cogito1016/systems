import { Injectable } from '@nestjs/common';
import { UserRepository } from '@app/user/user.repository';

@Injectable()
export class CatCommunityService {
  constructor(private readonly userRepository: UserRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    const users = await this.userRepository.findAll();
    console.log(users);
    return users.map((user) => user.readOnlyData);
  }
}
