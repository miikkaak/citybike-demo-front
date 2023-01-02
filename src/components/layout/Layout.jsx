import React from "react";
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
                <main className="content-wrapper">
                    <Sidebar/>
                    <div className="main-content">
                        {children}
                    </div>
                </main>
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;