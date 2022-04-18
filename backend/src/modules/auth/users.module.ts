import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { UsersService } from './users.service';

@Module({
    providers: [UsersService],
    exports: [UsersService],
    controllers: [LoginController]
})
export class UsersModule { }