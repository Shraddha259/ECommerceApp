import api from '../api/UserAxiosInstance';
import { IOrder } from '../types/Order';

export const OrderService = {
    PlaceOrder (order : IOrder)  {
        return api.post('/Order', order)
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    }
}