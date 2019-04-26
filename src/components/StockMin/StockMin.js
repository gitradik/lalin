import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {modalStyle} from "../../utils/modalStyle";
import Slider from "react-slick/lib";
import {slickSettings} from "../../utils/slick/slickSettings";
import '../../utils/slick/slickStiles.sass';
import Modal from "react-responsive-modal";
import ContactForm from "../ContactForm/ContactForm";

class StockMin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenPhoto: false,
            isOpenForm: false,
        }
    }

    onClickForm = () => {
        this.setState({isOpenForm: true});
    };

    onClickImg = () => {
        this.setState({isOpenPhoto: true});
    };

    closeModal = () => {
        this.setState({isOpenPhoto: false, isOpenForm: false});
    };

    renderSize() {
        const {sizes} = this.props;
        return sizes.map((el, i) => <span key={i + "g"}>{el}</span>)
    }

    renderImagesForSlider() {
        const {images} = this.props;
        return images.map((el, i) =>
            <div key={i} ref={this.hamList}>
                <img src={require('../../public/images/promotions/' + el)} alt={el}/>
            </div>
        );
    }

    render() {
        const {isOpenPhoto, isOpenForm} = this.state;
        const {mainImage, name, discount, price} = this.props;
        return (
            <>
            <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenPhoto} onClose={this.closeModal} centered>
                <Slider {...slickSettings}>
                    {this.renderImagesForSlider()}
                </Slider>
            </Modal>
            <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenForm} onClose={this.closeModal} centered>
                <div className={styles.contactForm}>
                    <ContactForm location="stocks"/>
                </div>
            </Modal>
            <div className={styles.stockMin}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <div className={styles.imgBox}>
                            <img src={require("../../public/images/promotions/" + mainImage)} alt={mainImage}/>
                        </div>
                        <div className={styles.descr}>
                            <h5 className={styles.name}>{name}</h5>
                            <div className={styles.sizes}>
                                {this.renderSize()}
                            </div>
                            <div className={styles.price}>
                                <span className={styles.old}><strike>{price}</strike></span>
                                <span className={styles.new}>{price - (price * discount)}</span>
                            </div>
                        </div>
                        <div className={styles.discount}>{discount + "%"}</div>
                        <button onClick={this.onClickImg}>Фото</button>
                        <button onClick={this.onClickForm}>Заказать</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

StockMin.propTypes = {
    name: PropTypes.string,
    mainImage: PropTypes.string,
    discount: PropTypes.number,
    sizes: PropTypes.array,
    price: PropTypes.number,
    images: PropTypes.array,
};

export default StockMin;