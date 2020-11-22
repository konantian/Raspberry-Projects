import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Layout } from 'antd';
import { FaClock, FaThermometerHalf, FaTint } from 'react-icons/fa';
import {TEM_API} from './utils/api';
import dayjs from 'dayjs';
import './temperature.css';
import ProjectsMenu from './components/ProjectsMenu';

function TempAndHumi() {

    const [temperature, setTemperature] = useState("Measuring...");
    const [humidity, setHumidity] = useState("Measuring...");
    const [time, setTime] = useState(dayjs().format('HH:mm:ss'));

    function fetchData(){
        axios.get(TEM_API).then((res) => {
            setTemperature(`${res.data[0]}°C`);
            setHumidity(`${res.data[1]}%`);
        })
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
        <Layout style={{ minHeight: '100vh' }}>
            <ProjectsMenu selectedIndex={'2'} />
            <Layout className="site-layout">
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
            </Layout>
        </Layout>
    )
}


export default TempAndHumi;