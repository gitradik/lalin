import React from 'react';
import dataContent from '../../utils/dataContent';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockMin from "../StockMin/StockMin";
import styles from './style.module.sass';
import {dataPromotions} from '../../utils/dataPromotions';

class Promotions extends React.Component {

    renderStockMins() {
        return dataPromotions.map((el, i) =>
            <Col key={i} className="d-flex justify-content-center" lg={4} md={6}>
                <StockMin
                    name={el.name}
                    mainImage={el.mainImage}
                    discount={el.discount}
                    sizes={el.sizes}
                    price={el.price}
                    images={el.images}
                />
            </Col>
        )
    }

    render() {
        return (
            <div id={dataContent.links[0].to} className={styles.promotions}>
                <div className={styles.container}>
                    <h2>Акции этой недели</h2>
                    <div className={styles.bordPink}/>
                    <div className={styles.boxes}>
                        <Container>
                            <Row className="justify-content-center">
                                {this.renderStockMins()}
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default Promotions;