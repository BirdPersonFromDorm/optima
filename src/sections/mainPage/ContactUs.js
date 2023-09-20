import React from 'react';
import contactUs from '../../accets/img/contact/contact-us.png'

const ContactUs = () => {
    return (
        <section className="main__contact contact" id="contact">
            <div className="contact__header header-contact">
                <div className="header-contact__container">
                    <h2 className="header-contact__title">Contact Us</h2>
                    <span className="header-contact__subtitle">Already use Optima? Sign in so we can tailor your support experience.
							If that’s not possible, we’d still like to hear from you.</span>
                </div>
            </div>
            <div className="contact__body body-contact">
                <div className="body-contact__container">
                    <form className="body-contact__form form">
                        <div className="form__email">
                            <label htmlFor="email">Your email address</label>
                            <input type="email" id="email" placeholder="Enter your email"/>
                        </div>
                        <div className="form__select">
                            <h4 className="form__title">Select a topic</h4>
                            <div className="form__topics">
                                <span className="form__topic active">Adding or removing users</span>
                                <span className="form__topic">Billing and plans</span>
                                <span className="form__topic">Connection Trouble</span>
                                <span className="form__topic">Notifications</span>
                                <span className="form__topic">Managing Channels</span>
                                <span className="form__topic">Signing in</span>
                                <span className="form__topic">New design feedback</span>
                                <span className="form__topic">Trial of a paid plan</span>
                            </div>
                        </div>
                        <div className="form__help">
                            <label htmlFor="text">Or tell us what you need help with?</label>
                            <input type="text" id="text" placeholder="Your message"/>
                        </div>
                        <button className="form__button">Get Help</button>
                    </form>
                    <div className="body-contact__picture">
                        <img src={contactUs} alt="Contact Us"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;