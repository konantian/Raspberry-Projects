import React from 'react';
import axios from 'axios';
import moment from 'moment';
import { FaClock, FaThermometerHalf, FaTint } from 'react-icons/fa';
import './main.css';

class Main extends React.Component{

    state = {
        temperature : "",
        humidity : "",
        currentTime : moment().format('h:mm:ss')
    }

    componentDidMount(){
        this.fetchData();
        setInterval(() => {
            this.setState({
              currentTime : moment().format('h:mm:ss')
            })
          }, 1000)
        setInterval(() => {
            this.fetchData();
        }, 5000)
    }

    fetchData = () => {
        axios.get("http://192.168.0.111:3000/api/gettmp").then((res) => {
            this.setState(({
                temperature: `${res.data[0]}°C`,
                humidity: `${res.data[1]}%`
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