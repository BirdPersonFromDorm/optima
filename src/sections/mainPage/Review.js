import React, {useRef} from 'react';
import userOne from '../../accets/img/testemonials/user-1.png'
import userTwo from '../../accets/img/testemonials/user-2.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import SliderItem from "../../components/mainPage/slider/SliderItem";

const Review = () => {

    const ref = useRef(null)

    const someTestName = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    const handleNextSlide = () =>{
        ref?.current?.slickNext()
    }

    const handlePrevSlide = () =>{
        ref?.current?.slickPrev()
    }

    const sliderItem = [
        {
            img: userOne,
            title: 'Help us improve our productivity',
            text: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen.',
            fullName: 'Kristin Watson',
            city: 'CEO, Rome'
        },
        {
            img: userOne,
            title: 'Help us improve our productivity',
            text: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen. The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen.',
            fullName: 'Kristin Watson',
            city: 'CEO, Rome'
        },
        {
            img: userTwo,
            title: 'Help us improve our productivity',
            text: 'The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen. The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen.',
            fullName: 'Kristin Watson',
            city: 'CEO, Rome'
        },
    ]

    return (
        <section className="main__testemonials testemonials" id="testemonials">
            <div className="testemonials__container">
                <div className="testemonials__header">
                    <h2 className="testemonials__title">What our customers are saying</h2>
                    <div className="testemonials__navigations">
                        <button type="button" className="testemonials__button-prev" onClick={handleNextSlide}>
                            <svg width="0" height="0" className="hidden">
                                <symbol fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 12"
                                        id="arrow">
                                    <path
                                        d="M15.2929 10.2929C14.9024 10.6834 14.9024 11.3166 15.2929 11.7071C15.6834 12.0976 16.3166 12.0976 16.7071 11.7071L21.7071 6.70711C22.0976 6.31658 22.0976 5.68342 21.7071 5.29289L16.7071 0.292894C16.3166 -0.0976312 15.6834 -0.0976312 15.2929 0.292894C14.9024 0.683417 14.9024 1.31658 15.2929 1.70711L18.5858 5H1C0.447715 5 0 5.44772 0 6C0 6.55229 0.447715 7 1 7H18.5858L15.2929 10.2929Z"
                                        fill=""/>
                                </symbol>
                            </svg>
                            <svg className="icon" width="22" height="12">
                                <use xlinkHref="#arrow"/>
                            </svg>
                        </button>
                        <button type="button" className="testemonials__button-next" onClick={handlePrevSlide}>
                            <svg width="0" height="0" className="hidden">
                                <symbol fill="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 12"
                                        id="arrow">
                                    <path
                                        d="M15.2929 10.2929C14.9024 10.6834 14.9024 11.3166 15.2929 11.7071C15.6834 12.0976 16.3166 12.0976 16.7071 11.7071L21.7071 6.70711C22.0976 6.31658 22.0976 5.68342 21.7071 5.29289L16.7071 0.292894C16.3166 -0.0976312 15.6834 -0.0976312 15.2929 0.292894C14.9024 0.683417 14.9024 1.31658 15.2929 1.70711L18.5858 5H1C0.447715 5 0 5.44772 0 6C0 6.55229 0.447715 7 1 7H18.5858L15.2929 10.2929Z"
                                        fill=""/>
                                </symbol>
                            </svg>
                            <svg className="icon" width="22" height="12">
                                <use xlinkHref="#arrow"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="testemonials__slider swiper">
                    <div className="testemonials__wrapper swiper-wrapper">
                        <Slider {...someTestName} ref={ref}>
                            {
                                sliderItem?.map(item =>
                                    <SliderItem
                                        item={item}
                                    />
                                )
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;