import { Injectable } from '@nestjs/common';
import { createHmac } from 'crypto';

@Injectable()
export class SecurityService {
  getHashedPassword(password: string): object {
    const secret = process.env.SECRET_KEY;
    const hashed = createHmac('sha256', secret).update(password).digest('hex');

    return {
      before: password,
      after: hashed,
    };
  }
}
