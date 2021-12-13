import { World } from "../entities/world.entity";

export class CreateWorldDto extends World {
    name_world: string;
    description: string | null;
    founding_company: string | null;
    picture_world: string;
    icon_world: string | null;
    banner_world: string;
    video_world: string | null;
    status_world: string;
    counter_views_world: number;
}
