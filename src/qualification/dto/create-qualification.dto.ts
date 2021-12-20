import { Qualification } from "../entities/qualification.entity";

export class CreateQualificationDto extends Qualification {
    value_qualification: number;
    comment: string | null;
    nick_name: string | null
}
