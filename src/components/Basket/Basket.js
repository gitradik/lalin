import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import cookie from 'react-cookies';
import {Container, Row, Col} from 'react-bootstrap';
import BasketProduct from "./BasketProduct";

class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    onChangeBasketProd = () => {
        this.setState({products: cookie.load('basket')});
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
                        size={p.size}
                        price={p.price}
                        mainImage={p.mainImage}
                        onChange={this.onChangeBasketProd}
                    />
                </Col>
            );
        }
    }

    render() {
        return (
            <div className={styles.basket}>
                <Title name="Корзина"/>
                <div className={styles.content}>
                    <Container fluid>
                        <Row className="justify-content-start">
                            {this.renderProducts()}
                            <Col md={12}>
                                <div className={styles.price}>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.setState({products: cookie.load('basket')})
    }
}

export default Basket;