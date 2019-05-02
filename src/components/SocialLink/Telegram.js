import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class Telegram extends React.Component {

    render() {
        const {telegram} = dataContent.socialLinks;
        return (
            <div className={styles.main}>

                <a className={styles.link} href={telegram.hrefMobile}
                   onMouseOver={this.viewTitle}
                   onMouseLeave={this.hiddenTitle}
                >
                    <i className={telegram.classIcon}/>
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

Telegram.propTypes = {
};

export default Telegram;
