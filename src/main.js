import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaClock, FaThermometerHalf, FaTint } from 'react-icons/fa';
import './main.css';
import {TEM_API} from './utils/api';

class Main extends React.Component{

    state = {
        temperature : "Measuring...",
        humidity : "Measuring...",
        isLoading : true,
        currentTime : moment().format('HH:mm:ss')
    }

    componentDidMount(){
        this.fetchData();
        setInterval(() => {
            this.setState({
              currentTime : moment().format('HH:mm:ss')
            })
          }, 1000)
    }

    fetchData = () => {
        axios.get(TEM_API).then((res) => {
            this.setState(({
                temperature: `${res.data[0]}°C`,
                humidity: `${res.data[1]}%`,
                isLoading : false
            }))
        })
    }

    render(){
        return (
            <div>
                <ul>
                    <li>
                        <FaClock className="clock"/><span id='time'>{this.state.currentTime}</span>
                    </li>
                    <li>
                        <FaThermometerHalf className="rmometer"/><span id='temperature'>{this.state.temperature}</span>
                    </li>
                    <li>
                        <FaTint className="tint"/><span id='humidity'>{this.state.humidity}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Main;