import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class Viber extends React.Component {

    render() {
        const {viber} = dataContent.socialLinks;
        return (
            <div className={styles.main}>
                <a className={styles.link} href={viber.hrefMobile}
                   onMouseOver={this.viewTitle}
                   onMouseLeave={this.hiddenTitle}
                >
                    <i className={viber.classIcon}/>
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

Viber.propTypes = {
};

export default Viber;
