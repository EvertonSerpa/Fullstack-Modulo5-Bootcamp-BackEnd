import { Prisma } from "@prisma/client";

export class Disputes implements Prisma.DisputesUncheckedCreateInput {
    id_disputes?: string;
    dispute_matter?: string;
    dispute_body: string;
    reply_seller?: string;
    status_dispute?: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    ordersId_orders: string;
    disputesId_users: string;
    sellerId_users: string;
}
