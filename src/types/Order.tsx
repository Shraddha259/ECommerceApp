export interface OrderDto {
    orderId: number;
    userId: number;
    totalAmount: number;
    status: string;
  }
  
  export interface OrderDetailDto {
    orderDetailId: number;
    orderId: number;
    productId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }
  
  export interface PaymentRequest {
    amount: number;
    paymentMethodId: string;
  }
  
  export interface IOrder {
    orderDto: OrderDto;
    orderDetailDto: OrderDetailDto[];
    paymentRequest: PaymentRequest;
  }