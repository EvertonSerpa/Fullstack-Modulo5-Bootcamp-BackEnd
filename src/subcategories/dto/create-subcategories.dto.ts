import { Subcategories } from '../entities/subcategories.entity';
import { IsString, IsNumber } from 'class-validator';

// Quando extends a propriedade Subcategoria posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateSubcategoriesDto extends Subcategories {
  @IsString( {message: 'Informe o id da categoria.'} )
  id_category: string;

  @IsString( {message: 'Informe o nome da sub-categoria.'} )
  nome_subcategory: string;

  @IsString( {message: 'Informe o banner da sub-categoria.'} )
  banner_subcategory: string;

  @IsString( {message: 'Informe a imagem da sub-categoria.'} )
  picture_subcategory: string;

  @IsString( {message: 'Informe o status da sub-categoria.'} )
  status_subcategory: string;

  @IsNumber( {}, {message: 'Informe o contador de visualização da sub-categoria.'}  )
  counter_views_subcategory: number;

  @IsString( {message: 'Informe a descrição da sub-categoria.'} )
  description?: string;
}
