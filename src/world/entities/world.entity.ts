import { Prisma } from "@prisma/client";

export class World implements Prisma.WorldUncheckedCreateInput{
    name_world?: string;
    description?: string;
    founding_company?: string;
    picture_world?: string;
    icon_world?: string;
    banner_world?: string;
    video_world?: string;
    status_category: string;
    counter_views_world?: number;
}