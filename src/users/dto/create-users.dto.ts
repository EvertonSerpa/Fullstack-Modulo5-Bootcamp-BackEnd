import { Users } from '../entities/users.entity';
import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
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
  surname: string;

  @IsString()
  profile_picture: string;

  @IsNotEmpty({ message: 'O campo nike name não pode ser vazio' })
  @IsString()
  @ApiProperty()
  nike_name: string;

  @IsString()
  @Length(6, 50, { message: 'Informe uma senha entre 6 e 50 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  status: string;

  @IsBoolean()
  seller: boolean;

  @IsString()
  description: string;

  @IsString()
  banner: string;

  @IsNumber()
  average_qualification: number | null;

  @IsNumber()
  conter_views_store: number;
}
