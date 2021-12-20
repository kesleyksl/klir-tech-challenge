import { Promotion } from "./promotion.interface";


export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    imagePath: string;
    promotion?: Promotion;
}