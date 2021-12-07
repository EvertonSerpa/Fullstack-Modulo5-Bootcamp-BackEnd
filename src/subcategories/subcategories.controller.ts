import { Controller, Body, Post } from '@nestjs/common';
import { Subcategories } from '.prisma/client';
import { CreateSubcategoriesDto } from './dto/create-subcategories.dto';
import { SubcategoriesService } from './subcategories.service';
import { SubcategoriesRole } from './enum/role.enum';

// Definimos uma rota na nossa aplicação. 
@Controller()
export class SubcategoriesController {
    constructor(private service: SubcategoriesService) { }
    
    @Post('create-subcategories')
    create(@Body() data: CreateSubcategoriesDto): Promise<Subcategories> {
        return this.service.create(data, SubcategoriesRole.USER);
    };
}
