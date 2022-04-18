import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local.auth.guard';

@UseGuards(LocalAuthGuard)
@Controller()
export class LoginController {
    @UseGuards(AuthGuard('local'))
    @Post('/users/auth/login')
    async login(@Request() req) {
        return req.user;
    }
}