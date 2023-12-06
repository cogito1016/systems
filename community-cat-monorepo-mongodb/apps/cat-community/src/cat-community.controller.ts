import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CatCommunityService } from './cat-community.service';
import { JwtAuthGuard } from './jwt/jwt.guard';
import { CurrentUser } from '@app/user/decorator/user.decorator';
import { User } from '@app/user/user.schema';
import { UserResponseDto } from '@app/user/dto/user.response.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation } from '@nestjs/swagger';

@Controller('cat')
export class CatCommunityController {
  constructor(private readonly catCommunityService: CatCommunityService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getuser(@CurrentUser() user: User): UserResponseDto {
    //현재접속한 사용자의 정보를 가져옴
    return user.readOnlyData;
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @UseInterceptors(FileInterceptor('image'))
  @Post('upload')
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log(files);
    console.log('uploading');
  }
}
