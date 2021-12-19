import { PromotionEnum } from "../enums/promotion-enum";
import { Promotion } from "../interfaces/promotion.interface";

export const promotionList: Promotion[] = [
    {
      id: 1,
      type: PromotionEnum.GET_ONE_FREE,
      minimalQuantity: 2,
      name: 'Buy 1 Get 1 Free',
      description: 'Buy 1 Get 1 Free'
    },

    {
      id: 2,
      type: PromotionEnum.FOR_TEN,
      minimalQuantity: 3,
      forPrice: 10,
      name: '3 for 10 Euro',
      description: '3 for 10 Euro'
    },
    {
      id: 3,
      type: PromotionEnum.GET_ONE_FREE,
      minimalQuantity: 3,
      name: 'Buy 2 Get 1 Free',
      description: 'Buy 2 Get 1 Free'
    },

    {
      id: 3,
      type: PromotionEnum.FOR_TEN,
      minimalQuantity: 4,
      forPrice: 15,
      name: '4 for 15 Euro',
      description: '4 for 15 Euro'
    },
  ]