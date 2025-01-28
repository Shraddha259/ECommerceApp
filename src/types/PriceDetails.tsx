import { ICartItem } from "./Cart";

export interface IPriceDetails {
    products: ICartItem[];
    taxRate: number; // Tax rate as a percentage (e.g., 10 for 10%)
    discount: number; // Total discount to be applied
    shipping: number; // Shipping cost
}