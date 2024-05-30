import React from "react";
import Footer from "./Footer"
import Header from "./Header/index"
import { Outlet } from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout