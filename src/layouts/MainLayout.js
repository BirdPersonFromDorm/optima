import React from 'react';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = ({children}) => {

    return (
        <div className="wrapper">
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default MainLayout;