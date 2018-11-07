import apiClient from './ApiClient';


export const getImages = () => apiClient.get('https://dog.ceo/api/breeds/image/random/3');