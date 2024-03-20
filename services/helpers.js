import {
  unixToLocalTime,
  timeTo12HourFormat
} from "./converters";

export const getWindSpeed = (windInMps) => windInMps

export const getVisibility = (visibilityInMeters) =>
  (visibilityInMeters / 1000).toFixed(1)

export const getTime = (currentTime, timezone) => timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (currentTime, timezone) => unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
  ? "PM"
  : "AM"

export const getWeekDay = (weatherData) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
};
