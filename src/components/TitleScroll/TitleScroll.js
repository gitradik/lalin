import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import Stock from "../Stock/Stock";
import {Container, Row, Col} from 'react-bootstrap';
import Triggers from "./Triggers";

class TitleScroll extends React.Component {

    render() {
        return (
            <div className={styles.titleScroll}>
               <div className={styles.back}/>
                <Container fluid={true}>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className={styles.title}>
                                <div className={styles.subTitle}>
                                    <h1>{dataContent.title}</h1>
                                    <p>{dataContent.subTitle}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={5} md={4} sm={12} className="d-flex align-items-center justify-content-center">
                            <Triggers/>
                        </Col>
                        <Col lg={7} md={8} sm={12}>
                            <Stock/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TitleScroll;