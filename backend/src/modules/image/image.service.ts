import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uiid } from 'src/common/random';
import { ImageEntity } from 'src/entities/image.entity';
import { Repository } from 'typeorm';
import * as path from 'path';
const gm = require('gm').subClass({ imageMagick: true });
import { AverageImageSize, IMAGE_DESTINATION, IMAGE_UPLOAD, LargeImageSize, smallImageSize } from 'src/config';

@Injectable()
export class ImageService {

  constructor(
    @InjectRepository(ImageEntity)
    private readonly repository: Repository<ImageEntity>
  ) { }

  async saveFileData(file: Express.Multer.File) {
    const save: Partial<ImageEntity> = {
      ...file,
      name: uiid(),
      original: file.destination
    }
    const largeImg = await this.convert(file.filename, LargeImageSize.width);
    const averageImg = await this.convert(file.filename, AverageImageSize.width);
    const smallImg = await this.convert(file.filename, smallImageSize.width);

    return this.repository.save({ ...save, averageImg, smallImg, largeImg });
  }

  convert(fileName: string, width: number): Promise<string> {
    return new Promise((resolve, reject) => {
      const inPath = `${IMAGE_DESTINATION}/${IMAGE_UPLOAD}/${fileName}`;
      const outPath = `${uiid()}${path.extname(fileName)}`;


      return gm(`${inPath}`)
        .resize(width)
        .write(outPath, (err) => {
          if (err) {
            reject(err);
          }
          resolve(outPath);
        });
    })
  }
}
