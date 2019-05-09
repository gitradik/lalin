import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import Modal from 'react-responsive-modal';
import Slider from "react-slick";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../utils/slickImagesGallery/slickStyles.sass';
import {modalStyle} from '../../utils/modalStyle';
import {slickSettingsStock} from '../../utils/slickImagesGallery/slickSettings';
import PushBasket from "./PushBasket";
import Thanks from "../Thanks/Thanks";
import connect from "react-redux/es/connect/connect";
import Loader from "react-loader-spinner";
import {ImgLoader} from "../ImgLoader/ImgLoader";

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isPush: false,
        }
    }

    onClickImg = () => {
        this.setState({isOpen: true});
    };

    closeModal = () => {
        this.setState({isOpen: false, isPush: false});
    };

    renderImagesForSlider() {
        const {stock} = dataContent.data;
        return stock.imagesCarousel.map((el, i) =>
            <div key={i + "imagesForSlider"} className="position-relative">
                <ImgLoader/>
                <img src={require('../../public/images/' + el)} alt={el}/>
            </div>
        );
    }

    renderStockImages() {
        const {stock} = dataContent.data;
        return stock.images.map((el, i) =>
            <div key={i + "stockImages"} className={styles.imgContainer}>
                <ImgLoader/>
                <img onClick={this.onClickImg}
                     src={require("../../public/images/" + el)}
                     alt={el}/>
            </div>
        );
    }

    getThanksTitle = () => {
        const {isRepeat} = this.props;
        return isRepeat ? "Уже в корзине!" : "Добавлен в корзину!"
    };

    onClickPush = () => {this.setState({isPush: true})};

    render() {
        const {isOpen, isPush} = this.state;
        const {discount, price, imgSale, name, color, sizes} = dataContent.data.stock;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                    <Slider {...slickSettingsStock}>
                        {this.renderImagesForSlider()}
                    </Slider>
                </Modal>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isPush} onClose={this.closeModal}
                    centered>
                    <Thanks title={<div className={styles.dataProdContactForm}>
                        <span>Название: {name},</span>
                        <span>Размер: {sizes[0]}</span>
                        <span>Цвет: {color}</span>
                        <span>{this.getThanksTitle()}</span>
                    </div>}/>
                </Modal>
                <div className={styles.stock}>
                    <div className={styles.container}>
                        <div className={styles.price} onClick={this.onClickImg}>{price - (price * (discount / 100))} грн.</div>
                        <div className={styles.oldPrice} onClick={this.onClickImg}><strike>{price} грн.</strike></div>
                        <div className={styles.sale} onClick={this.onClickImg}>
                            <img src={require('../../public/images/' + imgSale)} alt={imgSale}/>
                            <span>-{discount}%</span>
                        </div>
                        <div className={styles.img}>
                            {this.renderStockImages()}
                        </div>
                        <PushBasket
                            name={name}
                            color={color}
                            sizeKey={sizes[0]}
                            onClickPush={this.onClickPush}
                        />
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    const {isRepeat} = state.basketReducer;
    return {isRepeat};
};

export default connect(mapStateToProps)(Stock);