import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import ContactForm from "../ContactForm/ContactForm";
import Logo from "../Logo/Logo";
import Stock from "../Stock/Stock";
import {Container, Row, Col} from 'react-bootstrap';

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
                                    <h1>
                                        {dataContent.title}
                                       {/* <div className={styles.bord}/>
                                        <div className={styles.bord}/>*/}
                                    </h1>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col lg={7} md={8} sm={10}>
                            <Stock/>
                        </Col>
                        <Col lg={5} md={12} className="d-flex justify-content-center">
                            <div className={styles.contactForm}>
                                <ContactForm
                                    title={dataContent.titleContactForm}
                                    location="first-scroll"
                                    product="Акционный со скидкой 10%"
                                    textButton={dataContent.textButton}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default TitleScroll;