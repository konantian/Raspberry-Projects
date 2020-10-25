import React, {useState, useEffect} from 'react';
import {Layout, Breadcrumb } from 'antd';
import ReactMarkdown from 'react-markdown';
import 'antd/dist/antd.css';
import './main.css';
import ProjectsMenu from './components/ProjectsMenu';

const { Header, Content, Footer } = Layout;
const readmePath = require("./introduction.md");

function Main() {

    const [introduction, setIntroduction] = useState();

    useEffect(() => {
        fetch(readmePath).then(res => {
            return res.text();
        }).then(text =>{
            setIntroduction(text);
        } )
    },[])

    return (

        <Layout style={{ minHeight: '100vh' }}>
            <ProjectsMenu selectedIndex={'1'}/>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0,maxWidth: "94%"  }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item className="title">Introduction</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="content-container" >
                        <ReactMarkdown className="content" source={introduction} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Raspberrypi Projects ©2020 Created by Yuan Wang</Footer>
            </Layout>
        </Layout>
      );
}

export default Main;