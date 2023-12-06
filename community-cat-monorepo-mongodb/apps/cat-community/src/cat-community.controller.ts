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
  @UseInterceptors(FilesInterceptor('image', 10, multerOptions('cat')))
  @Post('upload')
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
    console.log('uploading');
    console.log(files);
    return { image: `http://localhost:3002/media/cat/${files[0].filename}` }; //TODO: 단일로만 처리하고있음
  }
}
