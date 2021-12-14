import { Prisma } from "@prisma/client";

export class Post implements Prisma.PostUncheckedCreateInput {
    id?: string;
    message_matter?: string;
    message_body: string;
    reply_seller?: string;
    date_updated?: string | Date;
    date_created?: string | Date;
    User?: Prisma.UserUncheckedCreateNestedManyWithoutPostInput;
    Product?: Prisma.ProductUncheckedCreateNestedManyWithoutPostInput;
    Sale?: Prisma.SaleUncheckedCreateNestedManyWithoutPostInput;
}
