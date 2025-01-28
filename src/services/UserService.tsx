import api from '../api/UserAxiosInstance';
import { IProduct } from '../types/Product';

export const UserService = {
    getUser (email : string | undefined)  {
        return api.get(`/User?Email=${email}`)
            .then(response => {
                console.log(response);
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    },
    getUserDetails(id : string | undefined) {
        return api.get(`/User/${id}`)
            .then(response => {
                return response.data;
            })
            .catch((error) => console.error('Error fetching data:', error))
    },
}