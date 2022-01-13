import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uiid } from 'src/common/random';
import { UploadEntity } from 'src/entities/upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {

  constructor(
  @InjectRepository(UploadEntity)
  private readonly repository:Repository<UploadEntity>
  ) {}

  saveFileData(file: Express.Multer.File) {
    const save: Partial<UploadEntity> = {
      ...file, 
      name: uiid(),
      original:file.destination
    }
    return this.repository.save(save);
  }
}
