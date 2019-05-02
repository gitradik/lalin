import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class WhatsApp extends React.Component {

    render() {
        const {whatsApp} = dataContent.socialLinks;
        return (
            <div className={styles.main}>
                <a className={styles.link} href={whatsApp.hrefMobile}
                   onMouseOver={this.viewTitle}
                   onMouseLeave={this.hiddenTitle}
                >
                    <i className={whatsApp.classIcon}/>
                </a>
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll, false);
    }
}

WhatsApp.propTypes = {
};

export default WhatsApp;
