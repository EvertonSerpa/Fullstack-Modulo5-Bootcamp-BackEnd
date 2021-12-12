import { Prisma } from "@prisma/client";

export class Post implements Prisma.PostUncheckedCreateInput {
    message_matter?: string;
    message_body?: string;
    reply_seller?: string;
}
