import api from '../api/OrderAxiosInstance';
import { IOrder } from '../types/Order';

export const OrderService = {
    PlaceOrder (order : IOrder)  {
        debugger
        return api.post('/Order', order)
            .then(response => {
                debugger
                console.log(response);
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    }
}