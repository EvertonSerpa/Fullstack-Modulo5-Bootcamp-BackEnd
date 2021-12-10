import { User } from "../entities/user.entity";

// Quando extends a propriedade User posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateUserDto extends User {

    name: string;
    surname: string;
    image: string | null
    nike_name: string;
    password: string;
    wishlist_products: string | null;
    wishlist_stores: string | null;
    email: string;
    status: string;
    qualification: string | null;
}
