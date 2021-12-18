import { PromotionEnum } from "../enums/promotion-enum";
import { Promotion } from "../interfaces/promotion.interface";

export const promotionList: Promotion[] = [
    {
      id: PromotionEnum.GET_ONE_FREE,
      minimalQuantity: 2,
      name: 'Buy 1 Get 1 Free',
      description: 'Buy 1 Get 1 Free'
    },
    {
      id: PromotionEnum.THREE_FOR_TEN,
      minimalQuantity: 3,
      name: '3 for 10 Euro',
      description: '3 for 10 Euro'
    }
  ]