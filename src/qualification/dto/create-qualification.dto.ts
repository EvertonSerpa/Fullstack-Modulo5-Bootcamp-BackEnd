import { Qualification } from "../entities/qualification.entity";
import { IsString, IsNumber } from "class-validator";

export class CreateQualificationDto extends Qualification {

    @IsNumber()
    value_qualification: number;

    @IsString()
    comment: string | null;

    @IsString()
    nick_name: string | null
}
