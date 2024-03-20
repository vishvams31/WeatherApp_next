import message from "../constants/messages";
import {
  unixToLocalTime,
  timeTo12HourFormat
} from "./converters";

export const getVisibility = (visibilityInMeters) =>
  (visibilityInMeters / 1000).toFixed(1)

export const getTime = (currentTime, timezone) => timeTo12HourFormat(unixToLocalTime(currentTime, timezone));

export const getAMPM = (currentTime, timezone) => unixToLocalTime(currentTime, timezone).split(":")[0] >= 12
  ? "PM"
  : "AM"

export const getWeekDay = (weatherData) => {
  const weekday = message.WEEKDAYS
  return weekday[
    new Date((weatherData.dt + weatherData.timezone) * 1000).getUTCDay()
  ];
};
