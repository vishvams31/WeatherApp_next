import Image from "next/image";
import { ctoF } from "../../services/converters";
import styles from "./MainCard.module.css";

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.location}>
        {city}, {country}
      </h1>
      <p className={styles.description}>{description}</p>
      <Image
        width="300"
        height="300"
        src={`/icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className={styles.temperature}>
        {unitSystem == "fehranheit"
          ? Math.round(weatherData.main.temp)
          : Math.round(ctoF(weatherData.main.temp))}
        °{unitSystem == "fehranheit" ? "C" : "F"}
      </h1>
      <p>
        Feels like{" "}
        {unitSystem == "fehranheit"
          ? Math.round(weatherData.main.feels_like)
          : Math.round(ctoF(weatherData.main.feels_like))}
        °{unitSystem == "fehranheit" ? "C" : "F"}
      </p>
    </div>
  );
};
