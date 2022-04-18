import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';

@UseGuards(LocalAuthGuard)
@Controller()
export class LoginController {
    constructor(
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('/users/auth/login')
    async login(@Request() req) {

        return this.authService.login({
            name: req.user.name,
            userUuid: req.user.userUuid,
        });
    }
}