import { Controller, Body, Post } from '@nestjs/common';
import { Telephone } from '.prisma/client';
import { CreateTelephoneDto } from './dto/create-thelephones.dto';
import { TelephonesService } from './telephones.service';
import { TelephoneRole } from './enum/role.enum';

// Definimos uma rota na nossa aplicação. 
@Controller()
export class TelephonesController {
    constructor(private service: TelephonesService) {}
    
    @Post('create-telephone')
    create(@Body() data: CreateTelephoneDto): Promise<Telephone> {
        return this.service.create(data, TelephoneRole.USER);
    };
}