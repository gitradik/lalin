import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {ImgLoader} from "../ImgLoader/ImgLoader";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageStatus: true};
    }

    handleImageLoaded = () => {
        this.setState({imageStatus: false})
    };

    render() {
        const {imageStatus} = this.state;
        const {imgName} = this.props;
        return (
            <div className={styles.reviewImg}>
                <div className="position-relative">
                    <img onLoad={this.handleImageLoaded}
                        src={require('../../public/images/' + imgName)} alt={imgName}/>
                    {imageStatus && <ImgLoader/>}
                </div>
            </div>
        );
    }
}

ReviewItem.propTypes = {
    imgName: PropTypes.string,
};

export default ReviewItem;