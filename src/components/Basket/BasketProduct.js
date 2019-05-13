import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import {modalStyle} from "../../utils/modalStyle";
import Modal from "react-responsive-modal";
import {removeInBasket, updateBasketItemCount, isBasketSubmit, setConfirmation} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import {Container, Row, Col} from 'react-bootstrap';

class BasketProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isMore: false,
        };
    }

    closeModal = () => {
        this.setState({isOpen: false})
    };

    onClickRemove() {
        const {id, size} = this.props;
        this.props.removeInBasket(id, size);
        this.props.isBasketSubmit();
    };

    renderPrice() {
        const {price, discount} = this.props;
        return <span className={styles.priceSpan}
                     style={{color: (discount ? 'red' : 'black')}}>
            {price - (price * (discount / 100))} грн
        </span>;
    }

    onChangeCount = (e) => {
        const {id, size} = this.props;
        this.props.updateBasketItemCount(e.target.value, id, size);
        this.props.isBasketSubmit();
    };

    render() {
        const {index, name, color, size, mainImage, count} = this.props;
        const {isMore} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={this.state.isOpen} onClose={this.closeModal} centered
                >
                    <div className={styles.question}>
                    <span>Вы уверены?</span>
                    <div className={styles.questionBtns}>
                        <button onClick={() => this.onClickRemove()}>Да</button>
                        <button onClick={() => this.setState({isOpen: false})}>Нет</button>
                    </div>
                    </div>
                </Modal>
            <div className={[styles.product, (isMore && styles.isMore)].join(' ')}

            >
                <Container fluid>
                    <Row className="justify-content-between">
                        <Col xs={2} className="d-flex align-items-center" onClick={() => this.setState( {isMore: true})}>
                            <div className={styles.index}>
                                <span>#{index + 1}</span>
                            </div>
                        </Col>
                        <Col xs={4} className="d-flex align-items-center" onClick={() => this.setState( {isMore: true})}>
                            <div className={styles.imgBox}>
                                <img src={require(`../../public/images/promotions/${mainImage}`)} alt={name}/>
                            </div>
                        </Col>
                        <Col xs={4} className="d-flex align-items-center" onClick={() => this.setState( {isMore: true})}>
                            <div className={styles.price}>
                                <span>Цена:</span>
                                {this.renderPrice()}
                            </div>
                        </Col>
                        <Col xs={2}>
                            <label className={styles.more} htmlFor="three_dots" onClick={() => this.setState( {isMore: !isMore})}>
                                <i className="fas fa-ellipsis-v"/>
                            </label>
                        </Col>
                        {isMore && <Col xs={6} className="d-flex align-items-center mt-1">
                            <div className={styles.name}>
                                <span>Название:</span>
                                <span>{name}</span>
                            </div>
                        </Col>}
                        {isMore && <Col xs={6} className="d-flex align-items-center mt-1">
                            <div className={styles.name}>
                                <span>Цвет:</span>
                                <span>{color}</span>
                            </div>
                        </Col>}
                        {isMore && <Col xs={6} className="d-flex align-items-center mt-1">
                            <div className={styles.name}>
                                <span>Размер:</span>
                                <span>{size}</span>
                            </div>
                        </Col>}
                        {isMore && <Col xs={6} className="d-flex align-items-center mt-1">
                            <div className={styles.name}>
                                <span>Количество:</span>
                                <input type="number" value={count} onChange={this.onChangeCount}/>
                            </div>
                        </Col>}
                        {isMore && <Col xs={12} className="d-flex align-items-center">
                            <div className={styles.delete}>
                                <button onClick={() => this.setState({isOpen: true})}>Удалить</button>
                            </div>
                        </Col>}
                    </Row>
                </Container>
                </div>
            </>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.isOpen || this.props.isOpen) {
            this.setState({isOpen: false})
        }
    }

    componentDidMount() {
        this.props.isBasketSubmit();
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
    removeInBasket: (id, size) => dispatch(removeInBasket(id, size)),
    updateBasketItemCount: (count, id, size) => dispatch(updateBasketItemCount(count, id, size)),
    isBasketSubmit: () => dispatch(isBasketSubmit()),
    setConfirmation: (value) => dispatch(setConfirmation(value)),
});

export default connect(null, mapDispatchToProps)(BasketProduct);