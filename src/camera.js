import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import {Layout, Spin } from 'antd';
import {CAM_API} from './utils/api';
import './camera.css';
import ProjectsMenu from './components/ProjectsMenu';

function Camera(){

    const [src, setSrc] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(CAM_API).then((res) => {
            setSrc(res.data.image);
            setLoading(false);
        })
    }, [])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <ProjectsMenu selectedIndex={'3'}/>
            {loading ? <Spin className="window" size="large" /> : 
                <img className="window" src={`data:image/png;base64, ${src}`} alt="capture" />
            }
            
         </Layout>
    )
}

export default Camera;