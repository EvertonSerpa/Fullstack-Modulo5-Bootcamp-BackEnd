import { Disputes } from '../entities/dispute.entity';
import { IsString } from 'class-validator';

export class CreateDisputesDto extends Disputes {
  @IsString()
  dispute_matter: string | null;

  @IsString()
  dispute_body: string | null;

  @IsString()
  reply_seller: string | null;

  @IsString()
  status_dispute: string | null;
}
