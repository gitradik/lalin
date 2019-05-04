import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {modalStyle} from "../../utils/modalStyle";
import Modal from "react-responsive-modal";
import {removeInBasket} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class BasketProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }

    closeModal = () => {
        this.setState({isOpen: false});
    };

    onClickRemove = () => {
        const {id, size} = this.props;
        this.props.removeInBasket(id, size);
        setTimeout(() => this.setState({isOpen: false}),0);
    };

    renderPrice() {
        const {price, discount} = this.props;
        return <span style={{color: (discount ? 'red' : 'black')}}>{price - (price * (discount / 100))} грн</span>;
    }

    render() {
        const {index, name, color, size, mainImage, count} = this.props;
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
                        <button onClick={() => this.setState({isOpen: false})}>Нет</button>
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
                        <span>Количество:</span>
                        {count}
                        <div className={styles.bord}/>
                    </div>
                    <div className={styles.name}>
                        <span>Цена:</span>
                        {this.renderPrice()}
                        <div className={styles.bord}/>
                    </div>
                </div>
                <div className={styles.delete}>
                    <button onClick={() => this.setState({isOpen: true})}>Удалить</button>
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

const mapDispatchToProps = (dispatch) => ({
    removeInBasket: (id, size) => dispatch(removeInBasket(id, size))
});

export default connect(null, mapDispatchToProps)(BasketProduct);