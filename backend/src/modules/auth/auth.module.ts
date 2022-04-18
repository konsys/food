import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from './users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/config';

@Module({
    imports: [UsersModule, PassportModule, JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: jwtConstants.expires },
    }),],
    providers: [AuthService, LocalStrategy],
    exports: [AuthService],
})
export class AuthModule { }
