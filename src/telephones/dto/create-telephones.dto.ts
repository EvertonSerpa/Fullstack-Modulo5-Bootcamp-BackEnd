import { Telephones } from '../entities/telephones.entity';
import { IsString, IsNotEmpty } from 'class-validator';

// Quando extends a propriedade Telephone posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateTelephonesDto extends Telephones {
  @IsString()
  number_telephone: string;

  @IsString()
  region_code: string;

  @IsString()
  country_code: string;
}
