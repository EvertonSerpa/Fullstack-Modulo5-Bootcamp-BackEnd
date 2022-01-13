import { Worlds } from '../entities/world.entity';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWorldsDto extends Worlds {
  @IsString()
  @IsNotEmpty({ message: 'O campo name word não pode ser vazio' })
  name_world: string;

  @IsString()
  description: string | null;

  @IsString()
  founding_company: string | null;

  @IsString()
  picture_world: string;

  @IsString()
  icon_world: string | null;

  @IsString()
  banner_world: string;

  @IsString()
  video_world: string | null;

  @IsString({ message: 'informe o status do word' })
  status_world: string;

  @IsNumber({}, { message: 'Informe o counter views world' })
  counter_views_world: number;
}
