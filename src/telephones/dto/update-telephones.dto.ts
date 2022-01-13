import { PartialType } from '@nestjs/mapped-types';
import { CreateTelephonesDto } from './create-telephones.dto';

export class UpdateTelephonesDto extends PartialType(CreateTelephonesDto) {}
