import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Payload } from '@nestjs/microservices';
import { sign } from 'crypto';
import { JwtPayload } from 'jsonwebtoken';
import { resolve } from 'path/posix';
import { LoginDTO } from 'src/users/dto/login.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService){}

    async validateUserByPassword(loginAttempt: LoginDTO){
        let userToAttempt = await this.userService.findOneByEmail(loginAttempt.email);

        return new Promise ((resolve) => {
            userToAttempt.checkPassword(loginAttempt.password, (err, isMatch) => {
                
            }
            )
        }
        
        )
    }

}
