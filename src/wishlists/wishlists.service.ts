import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createWishlistDto: CreateWishlistDto) {
    await this.prisma.wishlists.create({
      data: {

        ...(createWishlistDto as unknown as Prisma.wishlistsUncheckedCreateInput),
      },
    });

    return {
      mensage: 'Carteira cadastrada com sucesso!',
    };
  }

  async findAll() {
    return await this.prisma.wishlists.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.wishlists.findUnique({
      where: {
        id_wishlist: id,
      },
    });
  }

  update(id: string, updateWishlistDto: UpdateWishlistDto) {
    return `This action updates a #${id} wishlist`;
  }

  async remove(id: string) {
    return await this.prisma.wishlists.delete({
      where: {
        id_wishlist: id,
      },
    });
  }
}
