import { Users } from '../entities/users.entity';
import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
  IsEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Quando extends a propriedade User posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateUsersDto extends Users {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty({ message: 'O campo sobrenome não pode ser vazio' })
  @IsString()
  @ApiProperty()
  surname: string | null;

  @IsString()
  @ApiProperty()
  profile_picture: string | null;

  @IsNotEmpty({ message: 'O campo nike name não pode ser vazio' })
  @IsString()
  @ApiProperty()
  nick_name: string;

  @IsString()
  @Length(6, 50, { message: 'Informe uma senha entre 6 e 50 caracteres' })
  @ApiProperty()
  password: string;

  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  status: string;

  @IsBoolean()
  seller: boolean | null;

  @IsString()
  description: string | null;

  @IsString()
  banner: string | null;

  @IsNumber()
  average_qualification: number | null;

  @IsNumber()
  counter_views_store: number | null;

  @IsString()
  role: string | null;
}
