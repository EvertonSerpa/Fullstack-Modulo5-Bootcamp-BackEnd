import { Posts } from "../entities/post.entity";

export class CreatePostsDto extends Posts {
    message_matter: string | null;
    message_body: string;
    reply_seller: string | null;
}
