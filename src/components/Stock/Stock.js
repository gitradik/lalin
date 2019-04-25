import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import Modal from 'react-responsive-modal';
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../utils/slickSlider.sass';
import {modalStyle} from '../../utils/modalStyle';
import {slickSettings} from '../../utils/slickSettings';

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

    renderImages = () => {
        return dataContent.stockImages.map((el, i) =>
            <div key={i} ref={this.hamList}>
                <img src={require('../../public/images/' + el)} alt={el}/>
            </div>
        );
    };

    render() {
        const {isOpen} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                    <Slider {...slickSettings}>
                        {this.renderImages()}
                    </Slider>
                </Modal>
                <div className={styles.stock}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            {dataContent.titleStock}
                        </div>
                        <div className={styles.img}>
                            <img onClick={this.onClickImg}
                                 src={require("../../public/images/" + dataContent.stockImages[0])}
                                 alt={dataContent.stockImages[0]}/>
                            <img onClick={this.onClickImg}
                                 src={require("../../public/images/" + dataContent.stockImages[1])}
                                 alt={dataContent.stockImages[1]}/>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Stock;