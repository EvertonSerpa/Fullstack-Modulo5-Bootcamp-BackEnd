import { Users } from '../entities/users.entity';
import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
  IsEmpty,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Quando extends a propriedade User posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateUsersDto extends Users {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty({ message: 'O campo nike name não pode ser vazio' })
  @IsString()
  @ApiProperty()
  nick_name: string;

  @IsString()
  @Length(6, 50, { message: 'Informe uma senha entre 6 e 12 caracteres' })
  @ApiProperty()
  password: string;

  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  profile_picture: string | null;

  @IsOptional()
  @IsBoolean()
  seller: boolean | null;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsString()
  @IsOptional()
  banner: string | null;

  @IsNumber()
  @IsOptional()
  average_qualification: number | null;

  @IsNumber()
  @IsOptional()
  counter_views_store: number | null;

  @IsString()
  @IsOptional()
  role: string | null;
}
