import axios from 'axios';
import { toast } from 'react-hot-toast';
import message from '../constants/messages';

export const getData = async (cityInput, setWeatherData) => {
    try {
        const res = await axios.post("api/data", { cityInput });
        const data = res.data;
        console.log(res)
        console.log(data);
        if (!data.message) {
            setWeatherData({ ...data });
        } else {
        }
    } catch (error) {
        console.error(message.DATA_FETCHING_ERROR, error);
        toast.error(message.CITY_NOT_FOUND);
        // toast.error(message.DATA_FETCHING_ERROR);
    }
};
