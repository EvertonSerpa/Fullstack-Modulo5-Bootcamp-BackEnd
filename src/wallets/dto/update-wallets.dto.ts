import { PartialType } from '@nestjs/swagger';
import { CreateWalletsDto } from './create-wallets.dto';

export class UpdateWalletsDto extends PartialType(CreateWalletsDto) {}
