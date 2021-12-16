import { Disputes } from "../entities/dispute.entity";

export class CreateDisputesDto  extends Disputes {
    dispute_matter: string | null;
    dispute_body: string | null;
    reply_seller: string | null;
    status_dispute: string| null;
}
