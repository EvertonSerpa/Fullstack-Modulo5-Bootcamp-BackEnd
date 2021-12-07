import { Injectable } from '@nestjs/common';
import { Prisma, Posts } from '@prisma/client'
import { PrismaService } from 'src/prisma.service';
import { PostsRole } from './enum/role.enum'


@Injectable()
export class PostsService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.PostsCreateInput, role: PostsRole): Promise<Posts> {
    
    const posts = await this.db.posts.create({
      data,
    });

    return posts;
  }
}