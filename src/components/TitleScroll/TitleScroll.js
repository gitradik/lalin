import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import ContactForm from "../ContactForm/ContactForm";
import Logo from "../Logo/Logo";
import Stock from "../Stock/Stock";

class TitleScroll extends React.Component {

    render() {
        return (
            <div className={styles.titleScroll}>
                <div className={styles.back}/>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <div className={styles.subTitle}>
                            <h1>{dataContent.title}</h1>
                            <div className={styles.bord}/>
                            <div className={styles.bord}/>
                        </div>
                        <Logo />
                    </div>
                    <div className={styles.content}>
                        <Stock />
                        <ContactForm
                            title={dataContent.titleContactForm}
                            location="first-scroll"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleScroll;