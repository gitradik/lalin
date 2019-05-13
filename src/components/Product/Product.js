import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {modalStyle} from "../../utils/modalStyle";
import Slider from "react-slick/lib";
import {slickSettingsStock} from "../../utils/slickImagesGallery/slickSettings";
import '../../utils/slickImagesGallery/slickStyles.sass';
import Modal from "react-responsive-modal";
import {pushInBasket} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import Thanks from "../Thanks/Thanks";
import {ImgLoader} from "../ImgLoader/ImgLoader";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenPhoto: false,
            isBasketPush: false,
            titleForm: '',
            sizeKey: props.sizes[0],
            count: 1,
            imageStatus: true
        };
    }

    onClickForm() {
        const {count, sizeKey} = this.state;
        const {id, name, mainImage, discount, color, price, images, pushInBasket} = this.props;
        pushInBasket({id, name, mainImage, discount, color, size: sizeKey, price, images, count});
        this.setState({isBasketPush: true})
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
                <div onClick={() => this.onClickSize(el)}
                     className={[styles.size, (sizeKey === el && styles.activeSize)].join(' ')} key={i}>{el}</div>
            </React.Fragment>
        );
    }

    renderImagesForSlider() {
        const {images} = this.props;
        return images.map((el, i) => {
            let status = true;
            const handleImageLoadedSlider = () => {
                status = false;
            };
            return <div key={i} className="position-relative">
                    <img
                        onLoad={handleImageLoadedSlider}
                        src={require('../../public/images/promotions/' + el)} alt={el}/>
                    {status && <ImgLoader/>}
                </div>
            }
        );
    }

    renderPrice() {
        const {discount, price} = this.props;
        return discount ? <div className={styles.innerPrice}><strike>{price}</strike><span
            style={{color: 'red'}}>{price - (price * (discount / 100))}</span></div> : <span>{price}</span>
    }

    getThanksTitle() {
        return this.props.isRepeat ? "уже в корзине!" : "добавлен в корзину!"
    };

    handleImageLoaded = () => {
        this.setState({ imageStatus: false });
    };

    handleImageErrored = () => {
        this.setState({ imageStatus: "failed to load" });
    };

    render() {
        const {mainImage, name, className, color, discount} = this.props;
        const {count, isOpenPhoto, isBasketPush, imageStatus, sizeKey} = this.state;
        return (
            <>

                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpenPhoto} onClose={this.closeModal} centered>
                    <Slider {...slickSettingsStock}>
                        {this.renderImagesForSlider()}
                    </Slider>
                </Modal>

                <Modal
                    closeIconSize={38} styles={modalStyle} open={isBasketPush} onClose={this.closeModal} centered>
                    <Thanks title={<div className={styles.dataProdContactForm}>
                        <span>Название: {name}</span>
                        <span>Размер: {sizeKey}</span>
                        <span>Цвет: {color}</span>
                        <span>{this.getThanksTitle()}</span>
                    </div>}/>
                </Modal>

                <div className={styles[className]}>
                    <div className={styles.box}>
                        <div className={styles.subBox}>
                            <div className={styles.imgBox} onClick={this.onClickImg}>
                                <img
                                    onLoad={this.handleImageLoaded}
                                    onError={this.handleImageErrored}
                                    src={require("../../public/images/promotions/" + mainImage)} alt={mainImage}
                                />
                                {imageStatus && <ImgLoader/>}
                            </div>
                            {discount && <div className={styles.discount} onClick={this.onClickImg}>
                                <img src={require('../../public/images/sale.png')} alt="sale"/>
                                <span>
                                    -{discount}%
                                </span>
                            </div>}
                            <div className={styles.descr}>
                                <h5 className={styles.name}>{name}</h5>
                                <div className={styles.color}>
                                    <span>Цвет: {color}</span>
                                </div>
                                <div className={styles.price}>
                                    <span>Цена: </span>
                                    {this.renderPrice()}
                                    <span> грн.</span>
                                </div>
                                <div className={styles.sizes}>
                                    <div className={styles.titleSize}>Размеры:</div>
                                    {this.renderSize()}
                                </div>
                            </div>
                            <div className={styles.counter}>
                                <div className={styles.titleCount}>
                                    <span className={styles.tit}>Кол-во: </span>
                                    {count <= 0 && <span className={styles.error}>1 шт. минимум</span>}
                                </div>
                                <input className={count <= 0 ? styles.invalid : ""} value={count}
                                       onChange={e => {
                                           const {value} = e.target;
                                           if (value >= 0) this.setState({count: e.target.value});
                                           else this.setState({count: 1});
                                       }} type="number"
                                />
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={this.onClickImg}><i className="far fa-image"/><span>Фото</span>
                                </button>
                                <button disabled={!(count > 0)} onClick={() => this.onClickForm()}>
                                    <i className="fas fa-shopping-cart"/>
                                    <span>В корзину</span>
                                </button>
                            </div>
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
    className: PropTypes.string,
    length: PropTypes.number
};

Product.defaultProps = {
    className: 'product'
};

const mapStateToProps = state => {
    const {basket, isRepeat} = state.basketReducer;
    return {basket, isRepeat};
};

const mapDispatchToProps = (dispatch) => ({
    pushInBasket: (product) => dispatch(pushInBasket(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);