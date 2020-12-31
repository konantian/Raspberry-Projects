import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Spin, Alert, Image } from 'antd';
import {CAM_API} from './utils/api';
import './camera.css';

const Camera = () => {

    const [src, setSrc] = useState();
    const [loading, setLoading] = useState(true);
    const [isCamera, setCamera] = useState(true);

    useEffect(() => {
        axios.get(CAM_API).then((res) => {
            let image = res.data.image;
            if(image === 'No camera available'){
                setCamera(false);
            }else{
                setSrc(res.data.image);
            }
            setLoading(false);
        })
    }, [])

    return (
        <div>
            {loading ? <Spin className="window" size="large" tip={"Waking up the camera, please wait..."} /> : 
                isCamera ? <Image className="window" height={800} width={1000} src={`data:image/png;base64, ${src}`} alt="capture" /> : 
                <Alert className="alert" type="warning" message={"Camera is currently not available!"} />
            }
        </div>
            
    )
}

export default Camera;