import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { Strategy } from 'passport-local';
import { AccountService } from 'src/account.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly accountService: AccountService) {
    super({
      usernameField: 'user_id',
      passwordField: 'password',
    });
  }

  async validate(user_id: string, password: string): Promise<any> {
    const accountWhereInputWithHashedPassword: Prisma.AccountWhereInput = {
      user_id: user_id,
      password: this.accountService._getHashedPassword(password.toString()),
    };

    const account = await this.accountService.account(
      accountWhereInputWithHashedPassword,
    );

    if (!account) {
      throw new HttpException(
        '존재하지 않는 계정입니다',
        HttpStatus.BAD_REQUEST,
      );
    }

    return account;
  }
}
