import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaClock, FaThermometerHalf, FaTint } from 'react-icons/fa';
import './main.css';
import {TEM_API} from './utils/api';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';

function Main() {

    const [temperature, setTemperature] = useState("Measuring...");
    const [humidity, setHumidity] = useState("Measuring...");
    const [time, setTime] = useState(moment().format('HH:mm:ss'));
    const counter = useSelector(state => state.counter);
    const dispatch  = useDispatch();

    function fetchData(){
        axios.get(TEM_API).then((res) => {
            setTemperature(`${res.data[0]}°C`);
            setHumidity(`${res.data[1]}%`);
        })
    }

    //works like componentDidMount
    useEffect(() => {
        fetchData();
        setInterval(() => {
            setTime(moment().format('HH:mm:ss'));
          }, 1000)
    }, [])

    return (
        <div>
            <ul>
                <li>
                    <FaClock className="clock"/><span id='time'>{time}</span>
                </li>
                <li>
                    <FaThermometerHalf className="rmometer"/><span id='temperature'>{temperature}</span>
                </li>
                <li>
                    <FaTint className="tint"/><span id='humidity'>{humidity}</span>
                </li>
            </ul>
        </div>
    )
}

export default Main;