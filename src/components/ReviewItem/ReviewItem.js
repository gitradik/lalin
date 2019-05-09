import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import Loader from "react-loader-spinner";
import {ImgLoader} from "../ImgLoader/ImgLoader";

class ReviewItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false}
    }

    render() {
        const {isOpen} = this.state;
        const {imgName} = this.props;
        return (
            <div className={styles.reviewImg}>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={() => this.setState({isOpen: false})} centered>
                    <div className={styles.imgBoxModal}>
                        <ImgLoader/>
                        <img src={require('../../public/images/' + imgName)} alt={imgName + "modal"}/>
                    </div>
                </Modal>
                <div className="position-relative" onClick={() => this.setState({isOpen: true})}>
                    <ImgLoader/>
                    <img src={require('../../public/images/' + imgName)} alt={imgName}/>
                </div>
            </div>
        );
    }
}

ReviewItem.propTypes = {
    imgName: PropTypes.string,
};

export default ReviewItem;