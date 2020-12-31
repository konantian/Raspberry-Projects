import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FaClock, FaThermometerHalf, FaTint } from 'react-icons/fa';
import {TEM_API, HUM_API} from './utils/api';
import dayjs from 'dayjs';
import './main.css';

const TempAndHumi = () => {

    const [temperature, setTemperature] = useState("Measuring...");
    const [humidity, setHumidity] = useState("Measuring...");
    const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

    const fetchData = async () =>{

        const tempRes = await axios.get(TEM_API);
        const humRes = await axios.get(HUM_API);
        setTemperature(`${tempRes.data[0]}°C`);
        setHumidity(`${humRes.data[0]}%`);
    }

    //works like componentDidMount
    useEffect(() => {
        fetchData();
        //update the time every second
        let timer = setInterval(() => {
            setTime(dayjs().format('HH:mm:ss'));
            }, 1000);
        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div className="container" >
            <ul className="dataList">
                <li className="list">
                    <FaClock className="clock"/><span className = "item" id='time'>{time}</span>
                </li>
                <li className="list">
                    <FaThermometerHalf className="rmometer"/><span className = "item" id='temperature'>{temperature}</span>
                </li>
                <li className="list">
                    <FaTint className="tint"/><span className = "item" id='humidity'>{humidity}</span>
                </li>
            </ul>
        </div> 
    )
}


export default TempAndHumi;