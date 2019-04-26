import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import Modal from 'react-responsive-modal';
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../utils/slick/slickStyles.sass';
import {modalStyle} from '../../utils/modalStyle';
import {slickSettings} from '../../utils/slick/slickSettings';

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
            <img key={i + "stockImages"} onClick={this.onClickImg}
                 src={require("../../public/images/" + el)}
                 alt={el}/>
        );
    }

    render() {
        const {isOpen} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                    <Slider {...slickSettings}>
                        {this.renderImagesForSlider()}
                    </Slider>
                </Modal>
                <div className={styles.stock}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            {dataContent.titleStock}
                        </div>
                        <div className={styles.img}>
                            {this.renderStockImages()}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Stock;