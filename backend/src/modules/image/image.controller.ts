import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';
import { FILE_DESTINATION_PATH, FILE_UPLOAD_DIR } from 'src/config';

@Controller('img')
export class ImageController {
  constructor(private readonly service: ImageService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: `${FILE_DESTINATION_PATH}/${FILE_UPLOAD_DIR}`,
        filename: (req, file, cb) => {
          console.log(444444, file)
          cb(null, Date.now() + path.extname(file.originalname))
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
