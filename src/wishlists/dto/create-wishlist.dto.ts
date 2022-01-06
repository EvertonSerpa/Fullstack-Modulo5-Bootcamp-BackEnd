import { IsString } from 'class-validator';
import { Wishlist } from '../entities/wishlist.entity';

export class CreateWishlistDto extends Wishlist {
    @IsString({ message: 'Informe o id do usuário.'})
    id_user: string;

    @IsString({ message: 'Informe o id do usuário.'})
    id_products?: string | null;
    
    @IsString( {message: 'Informe o id do vendedor.'} )
    id_seller?: string | null;
}
