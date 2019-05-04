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
import {isValidCount} from '../../utils/validationForm';

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpenPhoto: false,
            isBasketPush: false,
            titleForm: '',
            sizeKey: props.sizes[0],
            count: 1,
            isValidCount: true
        };
    }

    onClickForm() {
        const {count} = this.state;
        const {id, name, mainImage, discount, color, price, images, pushInBasket} = this.props;
        pushInBasket({id, name, mainImage, discount, color, size: this.state.sizeKey, price, images, count});
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
                <div onClick={() => this.onClickSize(el)}
                      className={[styles.size, (sizeKey === el && styles.activeSize)].join(' ')} key={i}>{el}</div>
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

    onChangeCounter = (e) => {
        const {length} = this.props;
        this.setState({
            count: e.target.value,
            isValidCount: isValidCount(e.target.value, length)
        });
    };

    render() {
        const {mainImage, name, className, length} = this.props;
        const {isValidCount, count} = this.state;
        return (
            <>{this.renderModals()}
                <div className={styles[className]}>
                    <div className={styles.box}>
                        <div className={styles.subBox}>
                            <div className={styles.imgBox} onClick={this.onClickImg}>
                                <img src={require("../../public/images/promotions/" + mainImage)} alt={mainImage}/>
                            </div>
                            <div className={styles.descr}>
                                <h5 className={styles.name}>{name}</h5>
                                <div className={styles.sizes}>
                                    <span className={styles.titleSize}>Размеры: </span>
                                    {this.renderSize()}
                                </div>
                            </div>
                            <div className={styles.counter}>
                                <div className={styles.titleCount}>
                                    <span className={styles.tit}>Количество: </span>
                                    {count > length && <span>{"максимум: " + this.props.length}</span>}
                                    {count < 1 && <span>{"минимум: 1"}</span>}
                                </div>
                                <input className={!isValidCount ? styles.invalid : ""} value={this.state.count}
                                       onChange={this.onChangeCounter} type="number"
                                />
                            </div>
                            <div className={styles.price}>
                                <span>Цена: </span>
                                {this.renderPrice()}
                                <span> грн.</span>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={this.onClickImg}><i className="far fa-image"/><span>Фото</span>
                                </button>
                                <button disabled={!isValidCount} onClick={() => this.onClickForm(name)}>
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

const mapDispatchToProps = (dispatch) => ({
    pushInBasket: (product) => dispatch(pushInBasket(product))
});

export default connect(null, mapDispatchToProps)(Product);