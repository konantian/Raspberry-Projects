import React from 'react';
import 'antd/dist/antd.css';
import {Layout } from 'antd';
import ProjectsMenu from './components/ProjectsMenu';

function Camera(){

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <ProjectsMenu selectedIndex={'3'}/>
         </Layout>
    )
}

export default Camera;