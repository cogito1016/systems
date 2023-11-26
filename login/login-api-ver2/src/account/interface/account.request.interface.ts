import { Request } from 'express';

export interface AccountRequestInterface extends Request {
  user_id: string;
  password: string;
}
