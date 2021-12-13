import { Telephone } from "../entities/telephone.entity";

// Quando extends a propriedade Telephone posso vazer com que ela tenha qualquer variavel que eu queira.

export class CreateTelephoneDto extends Telephone {
    number_telephone: number;
    region_code: number;
    country_code: number;
}
