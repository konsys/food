import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uiid } from 'src/common/random';
import { ImageEntity } from 'src/entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {

  constructor(
  @InjectRepository(ImageEntity)
  private readonly repository:Repository<ImageEntity>
  ) {}

  saveFileData(file: Express.Multer.File) {
    const save: Partial<ImageEntity> = {
      ...file, 
      name: uiid(),
      original:file.destination
    }
    return this.repository.save(save);
  }
}
