import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';
import {modalStyle} from "../../utils/modalStyle";
import Modal from "react-responsive-modal";
import DATA_COOKIES from '../../utils/dataCookies';

class BasketProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isRemove: false,
        }
    }

    removeProd = () => {
        this.setState({isOpen: true})
    };

    closeModal = () => {
        this.setState({isOpen: false, isRemove: false});
    };

    onClickRemove = () => {
        const {id, size, onChange} = this.props;
        const products = cookie.load(DATA_COOKIES.BASKET);
        const indexProd = products.findIndex(p => (p.id === id && p.size === size));
        products.splice(indexProd, 1);
        cookie.save(DATA_COOKIES.BASKET, products);
        this.setState({isOpen: false, isRemove: false});
        onChange();
    };

    renderPrice() {
        const {price, discount} = this.props;
        return discount ? <span style={{color: 'red'}}>{price - (price * (discount / 100))} грн</span> : <span>{price} грн</span>;
    }

    render() {
        const {index, name, color, size, mainImage} = this.props;
        const {isOpen} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered
                >
                    <div className={styles.question}>
                    <span>Вы уверены?</span>
                    <div className={styles.questionBtns}>
                        <button onClick={this.onClickRemove}>Да</button>
                        <button onClick={() => this.setState({isOpen: false, isRemove: false})}>Нет</button>
                    </div>
                    </div>
                </Modal>
            <div className={styles.product}>
                <div className={styles.indexAndImg}>
                    <div className={styles.index}>
                        <span>#{index + 1}</span>
                    </div>
                    <div className={styles.imgBox}>
                        <img src={require(`../../public/images/promotions/${mainImage}`)} alt={name}/>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.name}>
                        <span>Название:</span>
                        <span>{name}</span>
                        <div className={styles.bord}/>
                    </div>
                    <div className={styles.name}>
                        <span>Цвет:</span>
                        <span>{color}</span>
                        <div className={styles.bord}/>
                    </div>
                    <div className={styles.name}>
                        <span>Размер:</span>
                        <span>{size}</span>
                        <div className={styles.bord}/>
                    </div>
                    <div className={styles.name}>
                        <span>Цена:</span>
                        {this.renderPrice()}
                        <div className={styles.bord}/>
                    </div>
                </div>
                <div className={styles.delete}>
                    <button onClick={this.removeProd}>Удалить</button>
                </div>
            </div>
            </>
        );
    }
}

BasketProduct.propTypes = {
    id: PropTypes.number,
    index: PropTypes.number,
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    price: PropTypes.number,
    mainImage: PropTypes.string,
};

export default BasketProduct;