import React from 'react'
import { ICartItem } from '../types/Cart';

interface PriceDetailsProps {
    products: ICartItem[];
    taxRate: number; // Tax rate as a percentage (e.g., 10 for 10%)
    discount: number; // Total discount to be applied
    shipping: number; // Shipping cost
}

const PriceDetails: React.FC<PriceDetailsProps> = ({
    products,
    taxRate,
    discount,
    shipping,
}) => {
    const calculateSubtotal = () => {
        return products.reduce((sum, product) => sum + product.price * product.quantity, 0);
    };

    const calculateTax = (subtotal: number) => {
        return (subtotal * taxRate) / 100;
    };

    const calculateTotal = (subtotal: number, tax: number) => {
        return subtotal + tax + shipping - discount;
    };

    const subtotal = calculateSubtotal();
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal, tax);

    const handlePlaceOrder = () => {
        return 0;
    };
    return (
        <>
            <div className="p-4 border rounded-lg shadow-md bg-white">
                <h2 className="text-xl font-bold mb-4">Price Details</h2>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Subtotal: </span>
                    <span className="font-semibold">{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Tax ({taxRate}%): </span>
                    <span className="font-semibold">{tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Discount: </span>
                    <span className="font-semibold text-red-500">-{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-gray-600">Shipping: </span>
                    <span className="font-semibold">{shipping.toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between py-2 text-lg font-bold">
                    <span>Total: </span>
                    <span>₹{total.toFixed(2)}</span>
                </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
                <button
                    className="btn btn-primary btn-lg"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </button>
            </div>

        </>
    );
};

export default PriceDetails;
