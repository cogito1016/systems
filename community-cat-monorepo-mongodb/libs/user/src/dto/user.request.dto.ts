import { PickType } from '@nestjs/swagger';
import { User } from '@app/user/user.schema';

export class UserRequestDto extends PickType(User, [
  'email',
  'name',
  'password',
] as const) {}
