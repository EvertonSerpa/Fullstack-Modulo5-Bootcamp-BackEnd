import { Post } from "../entities/post.entity";

export class CreatePostDto extends Post {
    message_matter: string | null;
    message_body: string| null;
    reply_seller: string | null;
}
