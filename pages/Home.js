import { useState, useEffect } from "react";
import { MainCard } from "../components/mainCard/MainCard";
import { ContentBox } from "../components/contentbox/ContentBox";
import { Header } from "../components/header/Header";
import { DateAndTime } from "../components/dateandtime/DateAndTime";
import { Search } from "../components/search/Search";
import { MetricsBox } from "../components/matricBox/MetricsBox";
import { UnitSwitch } from "../components/unitSwitch/UnitSwitch";
import styles from "../styles/Home.module.css";
import { getData } from "../services/service";
import React from 'react';
import Image from "next/image";
import toast from "react-hot-toast";

const Home = () => {
    const [cityInput, setCityInput] = useState("mumbai");
    const [triggerFetch, setTriggerFetch] = useState(true);
    const [weatherData, setWeatherData] = useState();
    const [unitSystem, setUnitSystem] = useState("fehranheit");

    useEffect(() => {
        getData(cityInput, setWeatherData);
        setCityInput("");
    }, [triggerFetch]);

    const changeSystem = () =>
        unitSystem === "fehranheit"
            ? setUnitSystem("celsius")
            : setUnitSystem("fehranheit");

    const handleSearch = () => {
        if (cityInput.length <= 0) {
            toast.error("Please add input");
        } else {
            setTriggerFetch(!triggerFetch);
        }
    };

    return weatherData && (
        <>
            <Image className="background-Image" src={'/Weather3.jpeg'} layout="fill" objectFit="cover" alt="Background Image" />
            <div className="title">Weather App</div>
            <div className={styles.wrapper}>
                <MainCard
                    city={weatherData.name}
                    country={weatherData.sys.country}
                    description={weatherData.weather[0].description}
                    iconName={weatherData.weather[0].icon}
                    unitSystem={unitSystem}
                    weatherData={weatherData}
                />
                <ContentBox>
                    <Header>
                        <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
                        <div>
                            <Search
                                placeHolder="Search a city..."
                                value={cityInput}
                                onFocus={(e) => {
                                    e.target.value = "";
                                    e.target.placeholder = "";
                                }}
                                onChange={(e) => setCityInput(e.target.value)}
                            />
                            <button className="searchButton" onClick={handleSearch}>Search</button>
                        </div>
                    </Header>
                    <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
                    <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
                </ContentBox>
            </div>
        </>
    );
};

export default Home;
