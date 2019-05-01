import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import cookie from 'react-cookies';

class BasketProduct extends React.Component {

    removeProd = () => {
        const {id, size, onChange} = this.props;
        const products = cookie.load('basket');
        const indexProd = products.findIndex(p => p.id === id && p.size === size);
        products.splice(indexProd, 1);
        cookie.save('basket', products);
        onChange();
    };

    render() {
        const {index, name, color, size, price, mainImage} = this.props;
        return (
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
                        <span>{price} грн.</span>
                        <div className={styles.bord}/>
                    </div>
                </div>
                <div className={styles.delete}>
                    <button onClick={this.removeProd}>Удалить</button>
                </div>
            </div>
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