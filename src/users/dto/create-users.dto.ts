import { Users } from "../entities/users.entity";

// Quando extends a propriedade User posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateUsersDto extends Users {
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
