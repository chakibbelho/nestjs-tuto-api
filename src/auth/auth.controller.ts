import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { Authdto } from './dto';


@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }
@Post('signup')
    signUp(@Body('email') email: string, @Body('password') password: string ) {{
        console.log({
        email,
        typeOfEmail: typeof email,
        password,
        typeOfPassword: typeof password,
        });
return this.authService.signUp();
    }}

    @Post('signin')
    signIn() {{
return this.authService.signIn();
    }

}}