import { UpdateImageDto } from './dto/update-image.dto';
import { CreateImageDto } from './dto/create-image.dto';
import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { FULL_UPLOAD_PATH } from 'src/config';
import { uiid } from 'src/common/random';
import { AbstractController } from 'src/abstract/crud/abstractController';
import { Images } from 'src/entities/images.entity';

@Controller('img')
export class ImageController extends AbstractController<Images, CreateImageDto, UpdateImageDto> {
  private imageService: ImageService;
  constructor(service: ImageService) {
    super(service);
    this.imageService = service;
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: `${FULL_UPLOAD_PATH}`,
        filename: (req, file, cb) => {
          cb(null, `${uiid()}${path.extname(file.originalname)}`)
        }
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.imageService.saveFileData(file);
  }

  @Post('/start')
  uploadStart() {
    return { success: true };
  }
}
