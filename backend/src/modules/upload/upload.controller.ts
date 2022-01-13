import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from 'path';

@Controller('upload')
export class UploadController {
  constructor(private readonly service: UploadService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploadFilesDir',
        filename:  (req, file, cb) => {
          cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
        }
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.service.saveFileData(file);
  }
}
