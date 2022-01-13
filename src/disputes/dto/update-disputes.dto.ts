import { PartialType } from '@nestjs/mapped-types';
import { CreateDisputesDto } from './create-disputes.dto';

export class UpdateDisputesDto extends PartialType(CreateDisputesDto) {}
