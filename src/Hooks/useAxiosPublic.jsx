import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://my-book-shop-backend.vercel.app',
    withCredentials: true,
})
const useAxiosPublic = () => {
    return axiosPublic
}
export default useAxiosPublic