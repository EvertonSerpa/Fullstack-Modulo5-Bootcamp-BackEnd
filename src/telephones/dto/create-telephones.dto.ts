import { Telephones } from "../entities/telephones.entity";

// Quando extends a propriedade Telephone posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateTelephonesDto extends Telephones {
    number_telephone: number;
    region_code: number;
    country_code: number;
}
