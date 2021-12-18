import { Promotion } from "./promotion.interface";


export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    total?: number;
    count?: number;
    imagePath: string;
    promotion?: Promotion;
}