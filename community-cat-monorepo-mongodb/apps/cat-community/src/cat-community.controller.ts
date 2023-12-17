import {
  Body,
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
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { AwsService } from '../../../libs/utils/aws.service';

@Controller('gomu-api')
export class CatCommunityController {
  constructor(
    private readonly catCommunityService: CatCommunityService,
    private readonly awsService: AwsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: '내 정보 조회' })
  @Get('user/me')
  getuser(@CurrentUser() user: User): UserResponseDto {
    //현재접속한 사용자의 정보를 가져옴
    return user.readOnlyData;
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @ApiParam({
    name: 'image',
    type: 'file',
    required: true,
    description: '고양이 이미지',
  })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('image'))
  @Post('user/profile-image')
  async uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @CurrentUser() user: User,
  ) {
    return this.awsService.uploadFileToS3('cats', files[0]);
    // return { image: `http://localhost:3002/media/user/${fileName}` };
  }

  @Get('user/profile-image')
  async getProfileImage(@Body('key') key: string) {
    console.log('getProfileImage');
    console.log(key);
    return this.awsService.getAwsS3FileUrl(key);
  }

  @ApiOperation({ summary: '고뮤니티 유저 조회' })
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUser(@CurrentUser() user: User) {
    return await this.catCommunityService.getUsers();
  }
}
