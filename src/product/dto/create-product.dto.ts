import { Product } from "../entities/product.entity";

export class CreateProductDto extends Product {
  product_name: string;
  price: number;
  description: string;
  specifications?: string;
  details?: string;
  product_route?: string;
  product_tags?: string;
  video?: string;
  main_image: string;
  gallery?: string;
  image_3d?: string;
  status: string;
  average_qualification?: number;
  counter_view_product: number;
  platform?: string;
  collection?: string;
  the_mount?: number;
  discount?: number;
  turbo_level: number;

}
