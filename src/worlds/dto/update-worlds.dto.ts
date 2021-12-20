import { PartialType } from '@nestjs/mapped-types';
import { CreateWorldsDto } from './create-worlds.dto';

export class UpdateWorldsDto extends PartialType(CreateWorldsDto) {}
