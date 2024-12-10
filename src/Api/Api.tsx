import axios from 'axios';

const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
const appid = import.meta.env.VITE_API_ID;
const apikey = import.meta.env.VITE_API_KEY;

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json'
  }
});

export const fetchProducts = async (page: number): Promise<any> => {
    const { data } = await apiClient.get('/products', {
        params: {
            organization_id: organizationId,
            page,
            size: 10,
            Appid: appid,
            Apikey: apikey,
        },
    });
    return data;
};

export const fetchSingleProduct = async (id: string): Promise<any> => {
    const { data } = await apiClient.get(`/products/${id}`, {
        params: {
            organization_id: organizationId,
            Appid: appid,
            Apikey: apikey,
        },
    });
    return data;
};
