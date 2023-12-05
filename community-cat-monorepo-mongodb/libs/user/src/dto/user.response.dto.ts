import { PickType } from '@nestjs/swagger';
import { User } from '@app/user/user.schema';

/**
 * Read-only data (mongodb virtual property)와 일치시킨다
 */
export class UserResponseDto extends PickType(User, [
  'email',
  'name',
] as const) {}
