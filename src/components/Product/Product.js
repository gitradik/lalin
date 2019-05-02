import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {modalStyle} from "../../utils/modalStyle";
import Slider from "react-slick/lib";
import {slickSettingsStock} from "../../utils/slickImagesGallery/slickSettings";
import '../../utils/slickImagesGallery/slickStyles.sass';
import Modal from "react-responsive-modal";
import cookie from 'react-cookies';
import DATA_COOKIES from '../../utils/dataCookies';
import Thanks from "../Thanks/Thanks";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenPhoto: false,
            isBasketPush: false,
            titleForm: '',
            sizeKey: props.sizes[0],
        };
    }

    onClickForm() {
        const {id, name, mainImage, discount, color, price, images} = this.props;
        let products = cookie.load(DATA_COOKIES.BASKET);
        if (products === undefined) {
            products = [];
        }
        products.push({id, name, mainImage, discount, color, size: this.state.sizeKey, price, images});
        cookie.save(DATA_COOKIES.BASKET, products, {path: process.env.PUBLIC_URL});
        this.setState({isBasketPush: true});
    }

    onClickImg = () => {
        this.setState({isOpenPhoto: true});
    };

    closeModal = () => {
        this.setState({isOpenPhoto: false, isBasketPush: false});
    };

    onClickSize(size) {
        this.setState({sizeKey: size})
    }

    renderSize() {
        const {sizes} = this.props;
        const {sizeKey} = this.state;
        return sizes.map((el, i) =>
            <React.Fragment key={el}>
                <span onClick={() => this.onClickSize(el)}
                      className={[styles.size, (sizeKey === el && styles.activeSize)].join(' ')} key={i}>{el}</span>
                {i !== sizes.length - 1 && ','}
            </React.Fragment>
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

    renderModals() {
        const {isOpenPhoto, isBasketPush} = this.state;
        if (isOpenPhoto) {
            return <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenPhoto} onClose={this.closeModal} centered>
                <Slider {...slickSettingsStock}>
                    {this.renderImagesForSlider()}
                </Slider>
            </Modal>;
        } else if (isBasketPush) {
            return <Modal
                closeIconSize={38} styles={modalStyle} open={isBasketPush} onClose={this.closeModal} centered>
                    <Thanks title="Ваш товар добавлен в корзину!"/>
            </Modal>;
        }
    }

    render() {
        const {mainImage, name, price} = this.props;
        return (
            <>{this.renderModals()}
                <div className={styles.product}>
                    <div className={styles.box}>
                        <div className={styles.subBox}>
                            <div className={styles.imgBox} onClick={this.onClickImg}>
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
                                    <span className={styles.new}>{price}</span>
                                    <span>грн.</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={this.onClickImg}><i className="far fa-image"/><span>Фото</span>
                            </button>
                            <button onClick={() => this.onClickForm(name)}>
                                <img src={require('../../public/images/basket.png')} alt="basket"/>
                                <span>В корзину</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    mainImage: PropTypes.string,
    discount: PropTypes.number,
    color: PropTypes.string,
    sizes: PropTypes.array,
    price: PropTypes.number,
    images: PropTypes.array,
};

export default Product;