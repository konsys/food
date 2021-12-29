import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { MenuModule } from './modules/menu/menu.module';
import { MenuTimeModule } from './modules/menu-time/menu-time.module';
import { OrmConfig } from './ormConfig';
import { MenuTypeModule } from './modules/menu-type/menu-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    AuthModule,
    UsersModule,
    MenuModule,
    MenuTimeModule,
    MenuTypeModule
  ],
})
export class MainModule {}
