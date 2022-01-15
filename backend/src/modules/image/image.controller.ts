import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { IMAGE_DESTINATION } from 'src/config';

@Controller('upload')
export class ImageController {
  constructor(private readonly service: ImageService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: IMAGE_DESTINATION,
        filename: (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
        }
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.service.saveFileData(file);
  }
}
