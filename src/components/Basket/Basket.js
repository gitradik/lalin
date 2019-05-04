import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import {Container, Row, Col} from 'react-bootstrap';
import BasketProduct from "./BasketProduct";
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import ContactForm from "../ContactForm/ContactForm";
import {updateBasket} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenForm: false,
        }
    }

    renderProducts() {
        const {basket} = this.props;
        if(basket !== undefined) {
            return basket.map((p, i) =>
                <Col key={i + 'basket'} md={12}>
                    <BasketProduct id={p.id} index={i} name={p.name} color={p.color} discount={p.discount}
                        size={p.size} price={p.price} mainImage={p.mainImage} count={p.count}
                    />
                </Col>
            );
        }
    }

    closeModal = () => {
        this.setState({isOpenForm: false})
    };

    renderContactForm() {
        const {isOpenForm} = this.state;
        const {basket} = this.props;
        if(basket) {
            return <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenForm} onClose={this.closeModal} centered>
                <ContactForm
                    title={<span>Оставьте свои данные для оформления заказа</span>}
                    location="Basket"
                />
            </Modal>;
        }
    }

    getDiscount(price, discount) {
        return price - (price * (discount / 100));
    }

    getAllPrice() {
        const {basket} = this.props;
        let allPrice = 0;
        if (basket !== undefined) {
            basket.forEach(p => {
                allPrice += this.getDiscount(p.price, p.discount)
            });
        }
       return allPrice;
    }

    isDisabledSubmit() {
        const {basket} = this.props;
        if(basket) {
            return !(basket.length > 0);
        } else {
            return true;
        }
    }

    render() {
        return (
            <div className={styles.basket}>
                {this.renderContactForm()}
                <Title name="Корзина"/>
                <div className={styles.content}>
                    <Container fluid>
                        <Row className="justify-content-start">
                            {this.renderProducts()}
                            <Col md={12}>
                                <div className={[styles.price, (this.isDisabledSubmit() && styles.inactive)].join(' ')}>
                                   <span>Общая сумма: {this.getAllPrice()} грн.</span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={[styles.submit, (this.isDisabledSubmit() && styles.disabled)].join(' ')}>
                                    <button disabled={this.isDisabledSubmit()}
                                            onClick={() => this.setState({isOpenForm: true})}>Заказать</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.updateBasket();
    }
}

const mapStateToProps = (state) => {
    const {basket, isFetching} = state.basketReducer;
    return {basket, isFetching};
};

const mapDispatchToProps = (dispatch) => ({
    updateBasket: () => dispatch(updateBasket())
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);