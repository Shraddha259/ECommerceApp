import api from '../api/CacheAxiosInstance';

export const CacheService = {
    setCart (userId : string | null, value : string)  {
        return api.post(`/Cache/${userId}`,null, {
            params: { value: value }, // Send `value` as a query parameter
          })
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                return null;
            })
    },
    getCart(userId : string | null) {
        return api.get(`/Cache/${userId}`)
            .then(response => {
                return response.data;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                return null;
            })
    },
}