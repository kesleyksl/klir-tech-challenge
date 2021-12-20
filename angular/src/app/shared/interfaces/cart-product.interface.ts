import { Product } from "./product.interface";

export interface ProductCart extends Product{
    count: number,
    total: number
}