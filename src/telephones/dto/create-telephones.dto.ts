import { Telephones } from "../entities/telephones.entity";

// Quando extends a propriedade Telephone posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateTelephonesDto extends Telephones {
    number_telephone: string;
    region_code: string;
    country_code: string;
}
