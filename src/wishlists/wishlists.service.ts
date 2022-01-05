import { Injectable } from '@nestjs/common';
import { prisma } from '../config/db';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistsService {
  
  // CRIA UMA WISHLISTS

  async create(createWishlistDto: CreateWishlistDto) {
    await prisma.wishlists.create({
      data: {

        ...(createWishlistDto),
      },
    });

    return {
      mensage: 'Wishlists cadastrada com sucesso!',
    };
  }
  
  // LISTA TODAS AS WISHLISTS DESSA ROTA

  async findAll() {
    return await prisma.wishlists.findMany();
  }

  // ENCONTRO UMA WISHLISTS PELO ID

  async findOne(id_wishlist: string) {
    return await prisma.wishlists.findUnique({
      where: {
        id_wishlist,
      },
    });
  }

  // ATUALIZA UMA WISHLISTS PELO ID

   async update(id_wishlist: string, data: UpdateWishlistDto) {
    await prisma.wishlists.update({
      where: { id_wishlist },
      data,
    })

    return {
      mensage: 'Wishlis atualizada com sucesso!',
    }
  }

  // DELETE UMA WISHLISTS PELO ID

  async remove(id_wishlist: string) {
    await prisma.wishlists.delete({
      where: {
        id_wishlist,
      },
    });

    return {
      message: 'Wishlis deletada com sucesso!',
    }
  }
}
