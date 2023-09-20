import React from 'react';
import appStore from '../../accets/img/first-screen/app-store.png'
import mobIcon from '../../accets/img/first-screen/mobail.png'

const IntroSection = () => {
    return (
        <section className="main__first-screen first-screen" id="home">
            <div className="first-screen__container">
                <div className="first-screen__text">
                    <h1 className="first-screen__title">
                        Your Favorite Home Parther
                    </h1>
                    <span
                        className="first-screen__subtitle">Download application to manager your immoveable.</span>
                    <div className="first-screen__download">
                        <a href="#" className="first-screen__link">
                            <img src={appStore} alt="App Store"/>
                        </a>
                    </div>
                </div>
                <div className="first-screen__picture">
                    <img src={mobIcon} alt="Mobail screen"/>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;