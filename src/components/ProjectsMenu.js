import React, {useState} from 'react';
import { Menu, Layout } from 'antd';
import 'antd/dist/antd.css';
import './ProjectsMenu.css';
import {HomeOutlined,CameraOutlined,ExperimentOutlined } from '@ant-design/icons';
import history from '../history';

const { Sider } = Layout;

function ProjectsMenu(props){

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
            <div className="logo" />
            <Menu defaultSelectedKeys={[props.selectedIndex]} mode="inline" theme="dark" >
                <Menu.Item key="1" icon={<HomeOutlined />} onClick={() => history.push("/")} >
                    Home
                </Menu.Item>
                <Menu.Item key="2" icon={<HomeOutlined />} onClick={() => history.push("/temperature-humidity")}>
                    Temp/Humi Viewer
                </Menu.Item>
                <Menu.Item key="3" icon={<CameraOutlined />} onClick={() => history.push('./camera') }>
                    Room Monitor
                </Menu.Item>
                <Menu.Item key="4" icon={<ExperimentOutlined />}>
                    Navigation Three
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default ProjectsMenu;