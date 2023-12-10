import {
  Controller,
  Get,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatCommunityService } from './cat-community.service';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { CurrentUser } from '@app/user/decorator/user.decorator';
import { User } from '@app/user/user.schema';
import { UserResponseDto } from '@app/user/dto/user.response.dto';
import { ApiOperation } from '@nestjs/swagger';
import { multerOptions } from '../../../libs/utils/multer.options';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('gomu-api')
export class CatCommunityController {
  constructor(private readonly catCommunityService: CatCommunityService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getuser(@CurrentUser() user: User): UserResponseDto {
    //현재접속한 사용자의 정보를 가져옴
    return user.readOnlyData;
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('image', 10, multerOptions('user')))
  @Post('user/profile-image')
  async uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @CurrentUser() user: User,
  ) {
    console.log('uploading');
    console.log(files);
    console.log(user);
    const fileName = files[0].filename;
    await this.catCommunityService.updateProfileImageById(user, fileName);
    console.log('업로드시작');
    return { image: `http://localhost:3002/media/user/${fileName}` }; //TODO: 단일로만 처리하고있음
  }

  @ApiOperation({ summary: '고뮤니티 유저 조회' })
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUser(@CurrentUser() user: User) {
    return await this.catCommunityService.getUsers();
  }
}
