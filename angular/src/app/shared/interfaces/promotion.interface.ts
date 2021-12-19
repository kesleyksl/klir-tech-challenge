import { PromotionEnum } from "../enums/promotion-enum";

export interface Promotion {
    id: number;
    type: PromotionEnum,
    minimalQuantity: number,
    forPrice?: number,
    name: string,
    description: string,
  }
  