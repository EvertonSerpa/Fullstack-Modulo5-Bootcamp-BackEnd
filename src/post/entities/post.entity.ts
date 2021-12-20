import { Prisma } from "@prisma/client";

export class Posts implements Prisma.PostsUncheckedCreateInput {
    id_posts?: string;
    message_matter?: string;
    message_body: string;
    reply_seller?: string;
    date_updated?: string | Date;
    date_created?: string | Date;
}
