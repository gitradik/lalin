import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import cookie from 'react-cookies';
import {Container, Row, Col} from 'react-bootstrap';
import BasketProduct from "./BasketProduct";
import DATA_COOKIES from '../../utils/dataCookies';
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import ContactForm from "../ContactForm/ContactForm";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            allPrice: 0,
            isOpenForm: false,
        }
    }

    onChangeBasketProd = () => {
        this.setState({products: cookie.load(DATA_COOKIES.BASKET)});
        setTimeout(() => this.setAllPrice(), 0);
    };

    renderProducts() {
        const {products} = this.state;
        if(products !== undefined) {
            return products.map((p, i) =>
                <Col key={i + 'basket'} md={12}>
                    <BasketProduct
                        id={p.id}
                        index={i}
                        name={p.name}
                        color={p.color}
                        discount={p.discount}
                        size={p.size}
                        price={p.price}
                        mainImage={p.mainImage}
                        onChange={this.onChangeBasketProd}
                    />
                </Col>
            );
        }
    }

    closeModal = () => {
        this.setState({isOpenForm: false})
    };

    renderContactForm() {
        const {isOpenForm, products} = this.state;
        if(products) {
            return <Modal
                closeIconSize={38} styles={modalStyle} open={isOpenForm} onClose={this.closeModal} centered>
                <ContactForm
                    title={<span>Корзина</span>}
                    location="Basket"
                    products={products}
                    onChange={this.onChangeBasketProd}
                />
            </Modal>;
        }
    }

    getDiscount(price, discount) {
        return discount ? price - (price * (discount / 100)) : price;
    }

    setAllPrice() {
        const {products} = this.state;
        let _allPrice = 0;
        if (products !== undefined) {
            products.forEach(p => {
                _allPrice += this.getDiscount(p.price, p.discount)
            });
        }
        this.setState({allPrice: _allPrice})
    }

    render() {
        const {allPrice} = this.state;
        return (
            <div className={styles.basket}>
                {this.renderContactForm()}
                <Title name="Корзина"/>
                <div className={styles.content}>
                    <Container fluid>
                        <Row className="justify-content-start">
                            {this.renderProducts()}
                            <Col md={12}>
                                <div className={styles.price}>
                                   <span>Общая сумма: {allPrice} грн.</span>
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className={styles.submit}>
                                    <button onClick={() => this.setState({isOpenForm: true})}>Заказать</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({products: cookie.load(DATA_COOKIES.BASKET)});
        setTimeout(() => this.setAllPrice(), 0);
    }
}

export default Basket;