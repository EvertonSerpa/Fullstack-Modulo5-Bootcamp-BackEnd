import { Controller, Body, Post } from '@nestjs/common';
import { User } from '.prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enum/role.enum';

// Definimos uma rota na nossa aplicação. 
@Controller()
export class UsersController {
    constructor(private service: UsersService) {}
    
    @Post('create')
    create(@Body() data: CreateUserDto): Promise<User> {
        delete data.password_confirmation;
        return this.service.create(data, UserRole.USER);
    };
}
