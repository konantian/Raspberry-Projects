import React from 'react';
import axios from 'axios';
import './main.css';

class Main extends React.Component{

    state = {
        temperature : 0,
        humidity : 0
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = () => {
        axios.get("http://192.168.0.111:3000/api/gettmp").then((res) => {
            this.setState(({
                temperature: res.data[0],
                humidity: res.data[1]
            }))
            console.log(res.data);
        })
    }

    render(){
        return (
            <div>
                <ul>
                    <li>
                        <span id='txt'></span>
                    </li>
                    <li>
                        <span id='temp'>{this.state.temperature}</span>
                    </li>
                    <li>
                        <span id='hum'>{this.state.humidity}</span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Main;