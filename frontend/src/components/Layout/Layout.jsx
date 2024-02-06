import React from "react";

import Routers from "../../router/Routers";
import Footer from "../Footer/footer";
import Header from "../Header/header";


const Layout = () => {
    return (
    <>
    <Header />
    <Routers />
    <Footer />
    </>
    );
};

export default Layout;
