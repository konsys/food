import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { UsersModule } from '../users/users.module';
import { MenuModule } from '../menu/menu.module';
import { MenuTimeModule } from '../menu-time/menu-time.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'mnpl',
      password: 'mnpl',
      database: 'mnpl',
      entities: [`${__dirname}/../../entities/*.entity{.ts,.js}`],
      synchronize: true,
      // logging: ['error'],
    }),
    AuthModule,
    UsersModule,
    MenuModule,
    MenuTimeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
