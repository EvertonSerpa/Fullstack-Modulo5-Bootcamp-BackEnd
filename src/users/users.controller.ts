import { Controller, Body, Post, Get, Delete, Param } from '@nestjs/common';
import { User } from '.prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserRole } from './enum/role.enum';

// Criando a rota POST. 
@Controller()
export class UsersController {
    constructor(private service: UsersService) {}
    
    @Post('create-user')
    create(@Body() data: CreateUserDto): Promise<User> {
        delete data.password_confirmation;
        return this.service.create(data, UserRole.USER);
    };

// Criando a rota GET.
    @Get('find-all-users')
    findMany() {
        return this.service.findMany();
    }

// Criando a rota DELETE por ID.
    @Delete('delete/:id')
    deleteOne(@Param('id') id: string): Promise<{ message: string }> {
        return this.service.deleteOne(id);
    }
}
