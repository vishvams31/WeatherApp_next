import axios from 'axios'; // Import axios

export default async function handler(req, res) {
  const { cityInput } = req.body;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching weather data.' });
  }
}
