import { Prisma } from "@prisma/client";

export class Worlds implements Prisma.WorldsUncheckedCreateInput{
    id_worlds?: string;
    name_world: string;
    description?: string;
    founding_company?: string;
    banner_world: string;
    picture_world: string;
    icon_world?: string;
    video_world?: string;
    status_world: string;
    counter_views_world?: number;
    date_updated?: string | Date;
    date_created?: string | Date;
}