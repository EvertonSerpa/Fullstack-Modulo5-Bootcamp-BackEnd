import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService) {}

  async login(login: LoginDto) {
    const { email, password } = login;

    const users = await this.db.users.findUnique({
      where: { email },
    });

    if (!users) {
      throw new NotFoundException('Usúario não existe');
    }
  }
}
