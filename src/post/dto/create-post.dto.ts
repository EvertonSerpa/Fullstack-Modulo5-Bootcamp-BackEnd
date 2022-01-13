import { Posts } from '../entities/post.entity';
import { IsString } from 'class-validator';

export class CreatePostsDto extends Posts {
  @IsString()
  message_matter: string | null;

  @IsString()
  message_body: string;

  @IsString()
  reply_seller: string | null;
}
