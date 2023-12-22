import axios from "axios"


const axiosCall = axios.create({
    baseURL: 'http://localhost:5000',
});
const useAxios = () => {
    return axiosCall
};

export default useAxios;