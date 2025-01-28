import api from '../api/ProductAxiosInstance';
import { IProduct } from '../types/Product';

export const ProductService = {
    getproducts ()  {
        return api.get('/Product')
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    },
    getProductDetails(id : string | undefined) {
        return api.get(`/Product/${id}`)
            .then(response => {
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    },
    updateProductDetail(data:IProduct) {
        return api.put(`/Product`, data)
            .then(response => {
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    },
    addProductDetail(data:IProduct) {
        return api.post(`/Product`, data)
            .then(response => {
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    },
    deleteProductDetail(id : string | undefined) {
        return api.delete(`/Product/${id}`)
            .then(response => {
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    },
}