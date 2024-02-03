import Styled from "styled-components";
import { useState, useEffect } from 'react';

function Weather({ dateLabel }) {
    const [cityName, setCityName] = useState('');
    const [weatherCondition, setWeatherCondition] = useState('');
    const [date, setDate] = useState('');
    const [minTemperature, setMinTemperature] = useState('');
    const [maxTemperature, setMaxTemperature] = useState('');
    const [image, setImage] = useState('');

    useEffect(()=>{
        try {
            fetch("https://weather.tsukumijima.net/api/forecast?city=400010")
                .then(response => response.json())
                .then(data => {
                    console.log(data); 
                    setCityName(data.location.city);
                    const forecast = data.forecasts.find(f => f.dateLabel === dateLabel);
                    if (forecast) {
                        setWeatherCondition(forecast.telop);
                        setDate(forecast.date);
                        setMinTemperature(forecast.temperature.min.celsius);
                        setMaxTemperature(forecast.temperature.max.celsius);
                        setImage(forecast.image.url);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        } catch (error) {
            console.error('Error in useEffect:', error);
        }
    },[]);

    return (
        <Div>
            <Profile>
                <div>
                    <SentenceName>City Name</SentenceName>
                    <SentencePlace>{cityName}</SentencePlace>
                </div>
                <div><img src={image} alt="Weather" /></div>
            </Profile>
            <Conditioin>
                <p>Weather Condition</p>
                <p>{weatherCondition}</p>
            </Conditioin>
            <Date>
                <div>
                    <p>Date</p>
                    <p>{date}</p>
                </div>
                <div>
                    <p>Temprature</p>
                    <p>{minTemperature}℃/{maxTemperature}℃</p>
                </div>
            </Date>
        </Div>
    );
}

export default Weather;
const Div = Styled.div`
    width: 24rem;
    height: 20rem;
    font-weight: 400;
    padding-left: 15px; /* 4px */
    padding-right: 15px; /* 4px */
    margin-left: 5px;
    margin-right: 5px;
    color: rgb(255 255 255);
    background-color: rgb(59 130 246);
    background-color: #3b82f6; 
    border-radius: 0.75rem; 
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transition-duration: 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    background-image: linear-gradient(to right, #3b82f6, #60a5fa);
`;

const Profile = Styled.div`
    display: flex;
    justify-content: space-between;
    
`
const SentenceName = Styled.p`
    font-weight: 300;
`
const SentencePlace = Styled.p`
    font-size: 1.125rem; 
    letter-spacing: 0.05em;
`
const Date = Styled.div`
    display: flex;
    justify-content: space-between;
    
`

const Conditioin = Styled.div`
`