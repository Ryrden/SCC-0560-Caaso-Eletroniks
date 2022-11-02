export interface ProductModel {
    id: number;
    imgSource: string;
    title: string;
    freeShipping: boolean;
    pricing: {
        fullPrice: string;
        hasPromotion: boolean;
        promotionalPrice: string;
        promotionWithPaymentMethod: string;
    };
    description: string;
    specifications: {
        processor: string;
        ramMemory: string;
        storage: string;
        videoCard: string;
        operatingSystem: string;
    };
}