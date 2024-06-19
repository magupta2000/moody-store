import { Menu } from "antd";
import React from "react";
import { Options } from "../NavigationOptions/Options";
import HeaderWrapper from "./Header.styles";
import {SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined} from "@ant-design/icons";

function Header () {
    return (
        <HeaderWrapper>
            <div className='top'>
                <h4>moody studio</h4>
                <div className='icons'>
                    <SearchOutlined />
                    <UserOutlined />
                    <ShoppingCartOutlined />
                    <HeartOutlined />
                </div>
            </div>
            <Menu
                theme="light"
                mode="horizontal"
                items={Options}      
            />
            <div className="breadcrumb">
                <p>homepage / brand / h&m home / bedroom</p>
            </div>
        </HeaderWrapper>
    )
}

export default Header;