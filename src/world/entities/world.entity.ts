import { Prisma } from "@prisma/client";

export class World implements Prisma.WorldUncheckedCreateInput{
    id?: string;
    name_world: string;
    description?: string;
    founding_company?: string;
    picture_world: string;
    icon_world?: string;
    banner_world: string;
    video_world?: string;
    status_world: string;
    counter_views_world?: number;
    date_updated?: string | Date;
    date_created?: string | Date;
    productId: string;
}