import { PartialType } from '@nestjs/mapped-types';
import { CreateWalletsDto } from './create-wallets.dto';

export class UpdateWalletsDto extends PartialType(CreateWalletsDto) {}
