import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { AccountService } from 'account/account.service';
import { Strategy } from 'passport-local';

/**
 * @description 로컬DB를 사용하는 로그인 전략
 * @reference https://kiwi-wiki.tistory.com/26#google_vignette
 */
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly accountService: AccountService) {
    super({
      usernameField: 'user_id',
      passwordField: 'password',
    });
  }

  async validate(user_id: string, password: string): Promise<any> {
    if (!user_id || !password) {
      throw new HttpException(
        '아이디와 비밀번호를 입력해주세요',
        HttpStatus.BAD_REQUEST,
      );
    }

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
