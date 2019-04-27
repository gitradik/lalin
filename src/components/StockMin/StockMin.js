import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {modalStyle} from "../../utils/modalStyle";
import Slider from "react-slick/lib";
import {slickSettings} from "../../utils/slick/slickSettings";
import '../../utils/slick/slickStyles.sass';
import Modal from "react-responsive-modal";
import ContactForm from "../ContactForm/ContactForm";

class StockMin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenPhoto: false,
            isOpenForm: false,
            titleForm: ''
        }
    }

    onClickForm(value) {
        this.setState({isOpenForm: true, titleForm: value});
    }

    onClickImg = () => {
        this.setState({isOpenPhoto: true});
    };

    closeModal = () => {
        this.setState({isOpenPhoto: false, isOpenForm: false});
    };

    renderSize() {
        const {sizes} = this.props;
        return sizes.map((el, i) =>
            <span key={i}>{el}{i !== sizes.length - 1 && ','}</span>
        );
    }

    renderImagesForSlider() {
        const {images} = this.props;
        return images.map((el, i) =>
            <div key={i} ref={this.hamList}>
                <img src={require('../../public/images/promotions/' + el)} alt={el}/>
            </div>
        );
    }

    renderDiscountPrice() {
        const {discount, price} = this.props;
        return price - (price * (discount / 100));
    }

    renderModals() {
        const {isOpenPhoto, isOpenForm, titleForm} = this.state;
        if (isOpenForm) {
            return <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenForm} onClose={this.closeModal} centered>
                    <ContactForm
                        title={
                            <span className={styles.titleForm}>
                                {titleForm}
                                <small className={styles.titleFormPrice}>
                                    {this.renderDiscountPrice()}
                                    <small>грн.</small>
                                </small>
                            </span>
                        }
                        location="Promotions"/>
            </Modal>;
        } else if (isOpenPhoto) {
            return <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenPhoto} onClose={this.closeModal} centered>
                <Slider {...slickSettings}>
                    {this.renderImagesForSlider()}
                </Slider>
            </Modal>;
        }
    }

    render() {
        const {mainImage, name, discount, price} = this.props;
        return (
            <>{this.renderModals()}
                <div className={styles.stockMin} onClick={this.onClickImg}>
                    <div className={styles.container}>
                        <div className={styles.box}>
                            <div className={styles.imgBox}>
                                <img src={require("../../public/images/promotions/" + mainImage)} alt={mainImage}/>
                            </div>
                            <div className={styles.descr}>
                                <h5 className={styles.name}>{name}</h5>
                                <div className={styles.sizes}>
                                    <span>Размеры: </span>
                                    {this.renderSize()}
                                </div>
                                <div className={styles.price}>
                                    <span>Цена: </span>
                                    <span className={styles.old}><strike>{price}</strike></span>
                                    <span className={styles.new}>{this.renderDiscountPrice()}</span>
                                    <span>грн.</span>
                                </div>
                            </div>
                            <div className={styles.discount}>
                                <img src={require('../../public/images/sale.png')} alt="discount"/>
                                <span>{discount + "%"}</span>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={this.onClickImg}><i className="far fa-image"/><span>Фото</span>
                                </button>
                                <button onClick={() => this.onClickForm(name)}>
                                    <i className="fas fa-phone"/>
                                    <span>Заказать</span>
                                </button>
                            </div>
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