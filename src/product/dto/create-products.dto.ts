import { Products } from '../entities/products.entity';
import { IsString, IsNumber } from 'class-validator';

export class CreateProductsDto extends Products {
  @IsString( { message: 'Informe o id da categoria' } )
  id_category: string;

  @IsString( { message: 'Informe o id da sub-categoria' } )
  id_subcategory: string;

  @IsString( { message: 'Informe o id do vendedor' } )
  id_seller: string;

  @IsString( { message: 'Informe o id da mundo' } )
  id_world: string;
  
  @IsString( { message: 'Informe o id do produto' } )
  name_product: string;

  @IsNumber({}, { message: 'Informe o preço do produto' } )
  price: number;

  @IsString( { message: 'Informe a descrição do produto' } )
  description: string;

  @IsString( { message: 'Informe a imagem do produto' } )
  main_picture: string;

  @IsNumber({}, { message: 'Informe a quantidade do produto' }  )
  stock?: number;
}
