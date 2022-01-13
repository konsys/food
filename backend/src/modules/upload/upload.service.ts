import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UploadEntity } from 'src/entities/upload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {

  constructor(
  @InjectRepository(UploadEntity)
  private readonly repository:Repository<UploadEntity>
  ) {}

  saveFileData(file: Express.Multer.File) {
    return this.repository.save(file);
  }

}


// @Injectable()
// export class MenuTypeService extends AbstractService<MenuTypeDict, CreateMenuTypeDto, UpdateMenuTypeDto> {
//   constructor(@InjectRepository(MenuTypeDict)
//   repository: Repository<MenuTypeDict>
//   ) { super(repository); }
// }
