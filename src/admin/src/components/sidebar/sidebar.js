import React from "react";
import { Link } from "react-router-dom";
import {Layout,Menu} from "antd";
import "./sidebar.css"

const {Sider} = Layout;
const Sidebar = () => {
    return ( <Layout className="Sidebar">
        <Sider width={400}>
            <Menu mode="inline">
                <Menu.ItemGroup key="g1" title="Баннер">
                    <Menu.Item key="/admin/home_banner">
                        <Link to="admin/home_banner">
                            <span>Баннер</span>
                        </Link>
                    </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Брэнд">
                    <Menu.Item key="/admin/brand">
                        <Link to="">
                            <span>Брэнд</span>
                        </Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        </Sider>
    </Layout>
        
    );
}
export default Sidebar;