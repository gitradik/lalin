import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import Modal from 'react-responsive-modal';
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../utils/slickImagesGallery/slickStyles.sass';
import {modalStyle} from '../../utils/modalStyle';
import {slickSettingsStock} from '../../utils/slickImagesGallery/slickSettings';

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    onClickImg = () => {
        this.setState({isOpen: true});
    };

    closeModal = () => {
        this.setState({isOpen: false});
    };

    renderImagesForSlider() {
        return dataContent.stockImages.map((el, i) =>
            <div key={i + "imagesForSlider"}>
                <img src={require('../../public/images/' + el)} alt={el}/>
            </div>
        );
    }

    renderStockImages() {
        const {stockImages} = dataContent;
        return stockImages.map((el, i) =>
            <div key={i + "stockImages"} className={styles.imgContainer}>
                <img onClick={this.onClickImg}
                     src={require("../../public/images/" + el)}
                     alt={el}/>
            </div>
        );
    }

    render() {
        const {isOpen} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                    <Slider {...slickSettingsStock}>
                        {this.renderImagesForSlider()}
                    </Slider>
                </Modal>
                <div className={styles.stock}>
                    <div className={styles.container}>
                        <div className={styles.img}>
                            {this.renderStockImages()}
                        </div>
                        <div className={styles.text}>
                            {dataContent.titleStock}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Stock;