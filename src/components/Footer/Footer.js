import React from 'react';
import styles from './style.module.sass';
import {Container, Row, Col} from 'react-bootstrap';
import dataContent from '../../utils/dataContent';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Title from "../Title/Title";

class Footer extends React.Component {

    renderPhones() {
        const {numberPhones} = dataContent;
        return (
            <div className={styles.phones}>
                <i className="fas fa-mobile-alt"/>
                <div>
                    <a href={`tel:${numberPhones.rodion}`}>
                        {numberPhones.rodion}
                    </a>
                    <a href={`tel:${numberPhones.ksu}`}>
                        {numberPhones.ksu}
                    </a>
                </div>
            </div>
        );
    }

    render() {
        const {instagram, telegram, whatsApp, viber} = dataContent.socialLinks;
        return (
            <div id="contacts" className={styles.footer}>
                <Title name="Контакты"/>
                <Container>
                    <Row className="justify-content-center">
                        <Col className="d-flex justify-content-center" md={3}>
                           <div className={styles.content}>
                               <h5 className={styles.title}>INSTAGRAM</h5>
                               <div className={styles.links}>
                                   <a href={instagram.hrefMobile} target="_blank">
                                       <img src={require('../../public/images/instagram.png')} alt="inst"/>
                                       {instagram.title}
                                   </a>
                               </div>
                           </div>
                        </Col>
                        <Col className="d-flex justify-content-center" md={3}>
                            <div className={styles.content}>
                                <h5 className={styles.title}>TELEGRAM</h5>
                                <div className={styles.links}>
                                    <a href={telegram.hrefMobile} target="_blank">
                                        <i style={{color: telegram.color}} className={telegram.classIconSecond}/>
                                        {telegram.title}
                                    </a>
                                    {this.renderPhones()}
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center" md={3}>
                            <div className={styles.content}>
                                <h5 className={styles.title}>WHATSAPP</h5>
                                <div className={styles.links}>
                                    <a href={whatsApp.hrefMobile} target="_blank">
                                        <i style={{color: whatsApp.color}} className={whatsApp.classIconSecond}/>
                                        {whatsApp.title}
                                    </a>
                                    {this.renderPhones()}
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center" md={3}>
                            <div className={styles.content}>
                                <h5 className={styles.title}>VIBER</h5>
                                <div className={styles.links}>
                                    <a href={viber.hrefMobile} target="_blank">
                                        <i style={{color: viber.color}} className={viber.classIcon}/>
                                        {viber.title}
                                    </a>
                                    {this.renderPhones()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;