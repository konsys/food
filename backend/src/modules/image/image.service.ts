import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { uiid } from 'src/common/random';
import { Repository } from 'typeorm';
import * as path from 'path';
const gm = require('gm').subClass({ imageMagick: true });
import { AverageImageSize, FULL_UPLOAD_PATH, LargeImageSize, smallImageSize } from 'src/config';
import { Images } from 'src/entities/images.entity';

@Injectable()
export class ImageService {

  constructor(
    @InjectRepository(Images)
    private readonly repository: Repository<Images>
  ) { }

  async saveFileData(file: Express.Multer.File) {
    const save: Partial<Images> = {
      ...file,
      name: uiid(),
      original: file.destination
    }

    const [largeImg, averageImg, smallImg] = await Promise.all([
      this.convert(file.filename, LargeImageSize.width),
      this.convert(file.filename, AverageImageSize.width),
      this.convert(file.filename, smallImageSize.width)
    ])


    return this.repository.save({ ...save, averageImg, smallImg, largeImg });
  }

  convert(inFileName: string, width: number): Promise<string> {

    return new Promise((resolve, reject) => {
      const outFileName = `${uiid()}${path.extname(inFileName).toLowerCase()}`;

      const inPath = `${FULL_UPLOAD_PATH}/${inFileName}`;
      const outPath = `${FULL_UPLOAD_PATH}/${outFileName}`;

      return gm(`${inPath}`)
        .resize(width)
        .write(outPath, (err) => {
          if (err) {
            reject(err);
          }
          resolve(outFileName);
        });
    })
  }
}
