import { World } from "../entities/world.entity";

export class CreateWorldDto extends World {
    name_world: string | null;
    description: string | null;
    founding_company: string | null;
    picture_world: string | null;
    icon_world: string | null;
    banner_world: string | null;
    video_world: string | null;
    status_category: string | null;
    counter_views_world: number;
}
