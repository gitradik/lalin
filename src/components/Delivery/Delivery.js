import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import Card from "./Card";
import dataContent from '../../utils/dataContent';
import {Container, Row, Col} from 'react-bootstrap';

class Delivery extends React.Component {

    renderCards() {
        const {cards} = dataContent.data.delivery;
        return cards.map(card =>
            <Col key={card.name} md={2} className="d-flex justify-content-center my-2">
             <Card key={card.name} name={card.name} photo={card.photo}/>
            </Col>
        );
    }

    render() {
        return (
            <div className={styles.delivery}>
                <Title name="Порядок заказа и получения"/>
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