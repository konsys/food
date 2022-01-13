import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploadFilesDir',
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const response = {
    	originaLname: file.originalname,
    	type: file.originalname,
    };
    return response;
  }
}
