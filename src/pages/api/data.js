import axios from 'axios';
import message from '../../constants/messages';

export default async function handler(req, res) {
  const { cityInput } = req.body;
  const BASE_URL = "https://api.openweathermap.org/"
  try {
    const response = await axios.get(
      `${BASE_URL}data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: message.DATA_FETCHING_ERROR });
  }
}
