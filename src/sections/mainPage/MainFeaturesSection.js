import React from 'react';
import mobIcon from '../../accets/img/features/mobail.png'
import firstIcon from '../../accets/img/features/1.png'
import secondIcon from '../../accets/img/features/2.png'
import thirdIcon from '../../accets/img/features/3.png'

const MainFeaturesSection = () => {
    return (
        <section className="main__features features" id="features">
            <div className="features__container">
                <div className="features__picture">
                    <img src={mobIcon} alt="Mobail screen"/>
                </div>
                <div className="features__content">
                    <h2 className="features__title">Main Features</h2>
                    <div className="features__items">
                        <div className="features__item">
                            <div className="features__num">
                                <img src={firstIcon} alt="Ferst features"/>
                            </div>
                            <div className="features__text">
                                <h4 className="features__name">Calling a specialist at home</h4>
                                <span className="features__description">
									</span>
                            </div>
                        </div>
                        <div className="features__item">
                            <div className="features__num">
                                <img src={secondIcon} alt="Ferst features"/>
                            </div>
                            <div className="features__text">
                                <h4 className="features__name">Monitoring of applications</h4>
                                <span className="features__description">
									</span>
                            </div>
                        </div>
                        <div className="features__item">
                            <div className="features__num">
                                <img src={thirdIcon} alt="Ferst features"/>
                            </div>
                            <div className="features__text">
                                <h4 className="features__name">Property management</h4>
                                <span className="features__description">
									</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainFeaturesSection;