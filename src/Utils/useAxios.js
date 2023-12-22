import axios from "axios"


const axiosCall = axios.create({
    baseURL: 'https://server-side-sooty.vercel.app',
});
const useAxios = () => {
    return axiosCall
};

export default useAxios;