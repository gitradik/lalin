import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function NextArrow(props) {
    const {onClick} = props;
    return (
        <button onClick={onClick} className={"slick-arrow slick-next"}><i className="fas fa-chevron-right"/></button>
    );
}

function PrevArrow(props) {
    const {onClick} = props;
    return (
        <button onClick={onClick} className={"slick-arrow slick-prev"}><i className="fas fa-chevron-left"/></button>
    );
}

export const slickSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
};