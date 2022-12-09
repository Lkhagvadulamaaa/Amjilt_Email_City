import React from "react";
import {Card} from "antd";
import Sidebar from "../../components/sidebar/sidebar";
import Home_Banner_Table from "../../components/tables/home_banner/table";
import "./home_banner.css"
const Home_Banner = () => {
    return (
        <div className="Home_Banner_Containers">
            <div className="Home_Containers_Sidebar">
                <Sidebar /> 
            </div>
            <div className="Home_Container_Navbar">
                <Card>
                <Home_Banner_Table />
                </Card>
               
            </div>
        </div>
    );
};

export default Home_Banner;