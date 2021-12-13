import { User } from "../entities/user.entity";

// Quando extends a propriedade User posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateUserDto extends User {
    name: string;
    surname: string;
    profile_picture: string
    nike_name: string;
    password: string;
    email: string;
    status: string;
    seller: boolean;
    description: string;
    banner: string;
    average_qualification: number | null;
    conter_views_store: number;
}
