import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MenuModule } from './modules/menu/menu.module';
import { MenuTimeModule } from './modules/menu-time/menu-time.module';
import { OrmConfig } from './ormConfig';
import { MenuTypeModule } from './modules/menu-type/menu-type.module';
import { ImageModule } from './modules/image/image.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    AuthModule,
    UsersModule,
    MenuModule,
    MenuTimeModule,
    MenuTypeModule,
    MenuModule,
    ImageModule,
    MulterModule,
    ServeStaticModule.forRoot({
      rootPath: `${__dirname}/../upload`,
    }),
  ],
})
export class MainModule { }
