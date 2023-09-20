import MainLayout from "./layouts/MainLayout";
import IntroSection from "./sections/mainPage/IntroSection";
import React from "react";
import MainFeaturesSection from "./sections/mainPage/MainFeaturesSection";
import Review from "./sections/mainPage/Review";
import ContactUs from "./sections/mainPage/ContactUs";

const App = () => {

    return (
        <MainLayout>
            <IntroSection/>
            <MainFeaturesSection/>
            <Review/>
            <ContactUs/>
        </MainLayout>
    )
}

export default App;
