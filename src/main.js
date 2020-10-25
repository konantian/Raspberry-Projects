import React from 'react';
import {Layout } from 'antd';
import 'antd/dist/antd.css';
import ProjectsMenu from './components/ProjectsMenu';

function Main() {

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <ProjectsMenu selectedIndex={'1'}/>
        </Layout>
      );
}

export default Main;