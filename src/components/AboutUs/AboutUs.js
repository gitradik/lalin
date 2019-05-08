import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import {Col, Container, Row} from "react-bootstrap";
import dataContent from '../../utils/dataContent';

class AboutUs extends React.Component {

    render() {
        const {aboutUs} = dataContent.data;
        return (
            <div id="aboutUs" className={styles.aboutUs}>
                <Title name="La Lingerie"/>
                <Logo/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <p className={styles.first}>
                                {aboutUs.firstTitle}
                            </p>
                        </Col>
                        <Col md={12}>
                            <p className={styles.second}>
                                {aboutUs.secondTitle}
                            </p>
                        </Col>
                        <Col md={12}>
                            <p className={styles.third}>
                                {aboutUs.thirdTitle}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AboutUs;