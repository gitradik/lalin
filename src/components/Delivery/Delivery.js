import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import Card from "./Card";
import dataContent from '../../utils/dataContent';
import {Container, Row, Col} from 'react-bootstrap';

class Delivery extends React.Component {

    renderCards() {
        const {cards} = dataContent.data.delivery;
        return cards.map((card, i) =>
            <Col key={card.name} xs={6} xl={2} lg={3} md={4} sm={6} className="d-flex justify-content-center my-2">
                <Card key={card.name}
                      name={card.name}
                      photo={card.photo}
                      subName={card.subName}
                      index={i + 1}
                />
            </Col>
        );
    }

    render() {
        return (
            <div id="order" className={styles.delivery}>
                <Title name="Как заказать?"/>
                <div className={styles.cards}>
                    <Container>
                        <Row className="justify-content-center">
                            {this.renderCards()}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Delivery;