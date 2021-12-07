import { Controller, Body, Post } from '@nestjs/common';
import { Posts } from '.prisma/client';
import { CreatePostsDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { PostsRole } from './enum/role.enum';


// Definimos uma rota na nossa aplicação. 
@Controller()
export class PostsController {
    constructor(private service: PostsService) {}
    
    @Post('create-posts')
    create(@Body() data: CreatePostsDto): Promise<Posts> {
        return this.service.create(data, PostsRole.USER);
    };
}