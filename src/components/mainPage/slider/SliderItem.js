import React from 'react';
import userOne from "../../../accets/img/testemonials/user-1.png";

const SliderItem = ({item}) => {

    const {
        img,
        title,
        text,
        fullName,
        city
    } = item;

    return (
        <div className="testemonials__slide swiper-slide" style={{
            marginLeft: 10
        }}>
            <h3 className="testemonials__heading">
                {title}
            </h3>
            <div className="testemonials__text">
                {text}
            </div>
            <div className="testemonials__user user">
                <div className="user__avatar">
                    <img src={img} alt="Avatar"/>
                </div>
                <div className="user__body">
                    <span className="user__author">
                        {fullName}
                    </span>
                    <span className="user__about">
                        {city}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;