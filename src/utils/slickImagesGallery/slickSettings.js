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

export const slickSettingsStock = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
};

export const slickSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },

    ]
};

export const slickSettingsDesctop = {

};

export const slickResponsive = [
    {
        settings: {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
        }
    },
    {
        breakpoint: 575,
        settings: {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
        }
    }
];
