import React from 'react';
import Title from "../Title/Title";
import dataContent from '../../utils/dataContent';
import {slickSettings} from "../../utils/slickImagesGallery/slickSettings";
import Slider from "react-slick/lib";
import ReviewItem from "../ReviewItem/ReviewItem";

class Reviews extends React.Component {

    renderImagesForSlider() {
        const {reviews} = dataContent.data;
        return reviews.images.map((el, i) =>
            <ReviewItem
                key={i}
                imgName={el}
            />
        );
    }

    render() {
        const {reviews} = dataContent.data;
        return (
            <div id="reviews">
                <Title name={reviews.title}/>
                <Slider {...slickSettings}>
                    {this.renderImagesForSlider()}
                </Slider>
            </div>
        );
    }

}

export default Reviews;