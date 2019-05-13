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
                <div className={styles.back}/>
                <Title name={aboutUs.title}/>
                <Logo/>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className={styles.content}>
                            <p>
                                {aboutUs.firstTitle}
                            </p>
                            <p>
                                {aboutUs.secondTitle}
                            </p>
                            <p>
                                {aboutUs.thirdTitle}
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default AboutUs;