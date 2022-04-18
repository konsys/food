import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/config';
import { AuthService } from './auth.service';
import { LoginController } from './login.controller';
import { UsersService } from './users.service';

@Module({
    imports: [JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: jwtConstants.expires },
    })],
    providers: [UsersService, AuthService],
    exports: [UsersService],
    controllers: [LoginController]
})
export class UsersModule { }