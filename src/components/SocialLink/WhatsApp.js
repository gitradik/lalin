import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class WhatsApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isViewTitle: false,
            isScroll: false,
        }
    }

    viewTitle = () => {
        this.setState({isViewTitle: true});
    };

    hiddenTitle = () => {
        this.setState({isViewTitle: false});
    };

    handleScroll = () => {
        if(window.scrollY > 119) {
            this.setState({isScroll: true})
        } else {
            this.setState({isScroll: false})
        }
    };

    render() {
        const {isViewTitle, isScroll} = this.state;
        const {whatsApp} = dataContent.socialLinks;
        return (
            <div className={styles.main}>
                {
                    isViewTitle &&
                    <a href={whatsApp.hrefMobile} className={[styles.title, (isScroll && styles.titleScroll)].join(' ')}>
                        <span>{whatsApp.title}</span>
                    </a>
                }
                <a className={styles.link} href={whatsApp.hrefMobile}
                   onMouseOver={this.viewTitle}
                   onMouseLeave={this.hiddenTitle}
                >
                    <i className={whatsApp.classIcon} style={{color: 'white'}}/>
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
