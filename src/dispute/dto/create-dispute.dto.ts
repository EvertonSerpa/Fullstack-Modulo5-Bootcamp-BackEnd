import { Dispute } from "../entities/dispute.entity";

export class CreateDisputeDto  extends Dispute {
    dispute_matter: string | null;
    dispute_body: string | null;
    reply_seller: string | null;
    status_dispute: string| null;
}
