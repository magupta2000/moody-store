import React from "react";
import SidebarWrapper from "./Sidebar.styles";
import { Layout, Menu } from "antd";
import { SidebarOptions } from './SidebarOptions';

const { Sider } = Layout;

export default function Sidebar() {

    
    return (
        <SidebarWrapper>
            <Sider
                className=""
                trigger={null}
                width={300} style={{ background: '#fff', padding: '20px' }}
            >
                <Menu
                    theme="light"
                    items={SidebarOptions}
                    defaultSelectedKeys={['bedroom']}
                    inlineCollapsed={false}
                >

                </Menu>

            </Sider>
        </SidebarWrapper>
    )
}