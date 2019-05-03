import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {modalStyle} from "../../utils/modalStyle";
import Slider from "react-slick/lib";
import {slickSettingsStock} from "../../utils/slickImagesGallery/slickSettings";
import '../../utils/slickImagesGallery/slickStyles.sass';
import Modal from "react-responsive-modal";
import Thanks from "../Thanks/Thanks";
import {pushInBasket} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

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
        const {id, name, mainImage, discount, color, price, images, pushInBasket} = this.props;
        pushInBasket({id, name, mainImage, discount, color, size: this.state.sizeKey, price, images});
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
            </React.Fragment>
        );
    }

    renderImagesForSlider() {
        const {images} = this.props;
        return images.map((el, i) =>
            <div key={i}>
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

    renderPrice() {
        const {discount, price} = this.props;
        return discount ? <div className={styles.old}><strike>{price}</strike> <span style={{color: 'red'}}>{price - (price * (discount / 100))}</span></div> : <span>{price}</span>
    }

    render() {
        const {mainImage, name} = this.props;
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
                            </div>
                            <div className={styles.price}>
                                <span>Цена: </span>
                                {this.renderPrice()}
                                <span> грн.</span>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={this.onClickImg}><i className="far fa-image"/><span>Фото</span>
                            </button>
                            <button onClick={() => this.onClickForm(name)}>
                                <i className="fas fa-shopping-cart"/>
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

const mapDispatchToProps = (dispatch) => ({
    pushInBasket: (product) => dispatch(pushInBasket(product))
});

export default connect(null, mapDispatchToProps)(Product);