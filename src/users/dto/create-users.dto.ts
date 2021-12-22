import { Users } from '../entities/users.entity';
import {
  IsString,
  Length,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
} from 'class-validator';

// Quando extends a propriedade User posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateUsersDto extends Users {
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @IsString({ message: 'Informe um nome válido' })
  name: string;

  @IsNotEmpty({ message: 'O campo sobrenome não pode ser vazio' })
  @IsString({ message: 'Infome um sobrenome válido' })
  surname: string;

  @IsString()
  profile_picture: string;

  @IsNotEmpty({ message: 'O campo nike name não pode ser vazio' })
  @IsString({ message: 'Informe um nike name válido' })
  nike_name: string;

  @IsString()
  @Length(6, 50, { message: 'Informe uma senha entre 6 e 50 caracteres' })
  password: string;

  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsString()
  @IsEmail({ message: 'Infome um endereço de email válido' })
  email: string;

  @IsString()
  status: string;

  @IsBoolean({ message: 'Informe um valor boleano' })
  seller: boolean;

  @IsString()
  description: string;

  @IsString()
  banner: string;

  @IsNumber({}, { message: 'Informe uma nota' })
  average_qualification: number | null;

  @IsNumber({}, { message: 'Informe o contador de views' })
  conter_views_store: number;
}
