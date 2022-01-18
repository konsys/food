import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { FULL_UPLOAD_PATH } from 'src/config';
import { uiid } from 'src/common/random';

@Controller('img')
export class ImageController {
  constructor(private readonly service: ImageService) { }

  @Post()
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
    return this.service.saveFileData(file);
  }

  @Post('/start')
  uploadStart() {
    return {success: true};
  }
}
