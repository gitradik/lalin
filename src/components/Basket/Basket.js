import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import {Container, Row, Col} from 'react-bootstrap';
import BasketProduct from "./BasketProduct";
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import ContactForm from "../ContactForm/ContactForm";
import {thanksOff, thanksOn, updateBasket} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";
import Thanks from "../Thanks/Thanks";

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
                        size={p.size} price={p.price * p.count} mainImage={p.mainImage} count={p.count}
                    />
                </Col>
            );
        }
    }

    renderContactForm() {
        const {isOpenForm} = this.state;
        const {basket} = this.props;
        if(basket) {
            return <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenForm} onClose={() => this.setState({isOpenForm: false})} centered>
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
                allPrice += this.getDiscount(p.price * p.count, p.discount)
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
        const {isSubmit, isThanks} = this.props;
        return (
            <div className={styles.basket}>

                <Modal
                    closeIconSize={38} styles={modalStyle} open={isThanks} onClose={() => this.props.thanksOff()} centered>
                    <Thanks title="Спасибо за покупку!" subTitle="Вам позвонят в ближайшее время"/>
                </Modal>

                {this.renderContactForm()}
                <Title name="Корзина"/>
                <div className={styles.content}>
                    <Container fluid>
                        <Row className="justify-content-start">
                            {this.renderProducts()}
                            <Col md={12}>
                                <div className={[styles.allPrice, (!isSubmit && styles.inactive)].join(' ')}>
                                   <span>Общая сумма: {this.getAllPrice()} грн.</span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={[styles.submit, (!isSubmit && styles.disabled)].join(' ')}>
                                    <button disabled={!isSubmit}
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
    const {isThanks} = state.contactFormReducer;
    const {basket, isFetching, isSubmit} = state.basketReducer;
    return {basket, isFetching, isSubmit, isThanks};
};

const mapDispatchToProps = (dispatch) => ({
    updateBasket: () => dispatch(updateBasket()),
    thanksOff: () => dispatch(thanksOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);