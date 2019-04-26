import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class Viber extends React.Component {
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
        const {viber} = dataContent.socialLinks;
        return (
            <div className={styles.main}>
                {
                    isViewTitle &&
                    <a href={viber.hrefMobile} className={[styles.title, (isScroll && styles.titleScroll)].join(' ')}>
                        <span>{viber.title}</span>
                    </a>
                }
                <a className={styles.link} href={viber.hrefMobile}
                   onMouseOver={this.viewTitle}
                   onMouseLeave={this.hiddenTitle}
                >
                    <i className={viber.classIcon} style={{color: !isViewTitle ? 'white' : viber.color}}/>
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
