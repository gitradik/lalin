import React from 'react';
import styles from './style.module.sass';
import {Container, Row, Col} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center" md={4}></Col>
                        <Col className="d-flex justify-content-center" md={4}></Col>
                        <Col className="d-flex justify-content-center" md={4}></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;