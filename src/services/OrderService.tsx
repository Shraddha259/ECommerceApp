import api from '../api/OrderAxiosInstance';
import { IOrder } from '../types/Order';

export const OrderService = {
    PlaceOrder (order : IOrder)  {
        return api.post('/Order', order)
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                return null;
            })
    },
    getOrder(id : number | undefined) {
        return api.get(`/Order/${id}`)
            .then(response => {
                return response.data;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                return null;
            })
    },
}