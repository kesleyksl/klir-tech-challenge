import { Product } from "../interfaces/product.interface";
import { promotionList } from "./PromotionsMock";


export const productMock: Product[] = [

    {
        id: 1,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis deserunt nam a? Minus vel harum in cumque. Quae consequatur nemo nam recusandae nostrum ipsum inventore rerum illum aut qui!",
        name: "Product A",
        imagePath: "https://picsum.photos/300",
        price: 5.8,
        promotion: promotionList[0]
    },
    {
        id: 2,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis deserunt nam a? Minus vel harum in cumque. Quae consequatur nemo nam recusandae nostrum ipsum inventore rerum illum aut qui!",
        name: "Product B",
        imagePath: "https://picsum.photos/300",
        price: 6.32,
        promotion: promotionList[1]
    },
    {
        id: 3,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis deserunt nam a? Minus vel harum in cumque. Quae consequatur nemo nam recusandae nostrum ipsum inventore rerum illum aut qui!",
        name: "Product C",
        imagePath: "https://picsum.photos/300",
        price: 4.98
    },
    {
        id: 4,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis deserunt nam a? Minus vel harum in cumque. Quae consequatur nemo nam recusandae nostrum ipsum inventore rerum illum aut qui!",
        name: "Product D",
        imagePath: "https://picsum.photos/300",
        price: 4.37,
    },
    {
        id: 5,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis deserunt nam a? Minus vel harum in cumque. Quae consequatur nemo nam recusandae nostrum ipsum inventore rerum illum aut qui!",
        name: "Product E",
        imagePath: "https://picsum.photos/300",
        price: 4.67,
        promotion: promotionList[2]
    },
    {
        id: 6,
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis deserunt nam a? Minus vel harum in cumque. Quae consequatur nemo nam recusandae nostrum ipsum inventore rerum illum aut qui!",
        name: "Product F",
        imagePath: "https://picsum.photos/300",
        price: 4.67,
        promotion: promotionList[3]
    },
];
