import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './style.module.sass';
import PropTypes from 'prop-types';
import Viber from "../SocialLink/Viber";
import Telegram from "../SocialLink/Telegram";
import WhatsApp from "../SocialLink/WhatsApp";
import AnchorLink from 'react-anchor-link-smooth-scroll';

class HamMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMenu: false,
            isScroll: false,
        };
        this.hamList = React.createRef();
        this.ham = React.createRef();
    }

    renderLinks() {
        const {links} = this.props;
        return links.map((el, i) =>
            <div key={i} className={styles.linkContainer}>
                <AnchorLink className={styles.link} href={"#" + el.to} onClick={this.handleClickLink}>
                    <span>{el.title}</span>
                </AnchorLink>
            </div>
        );
    }

    handleScroll = () => {
      if(window.scrollY > 119) {
          this.setState({isScroll: true})
      } else {
          this.setState({isScroll: false})
      }
    };

    handleClickLink = () => {
        this.setState({isOpenMenu: false});
    };

    handleClick = (e) => {
        if (this.hamList.current.contains(e.target) || this.ham.current.contains(e.target)) {
            return;
        }
        this.setState({isOpenMenu: false});
    };

    renderNumberTel() {
        if (window.scrollY > 119 && window.innerWidth > 399) {
            return <a className={styles.numTel} href="tel:+380997669225">+38 (099) 766-92-25</a>;
        } else if (window.innerWidth > 449) {
            return <a className={styles.numTel} href="tel:+380997669225">+38 (099) 766-92-25</a>;
        }
    };

    render() {
        const {isOpenMenu, isScroll} = this.state;
        return (
            <div className={styles.hamMenu}>
                <div className={[styles.subMain, (isScroll && styles.subMainScroll)].join(' ')}>
                <div className={styles.hamContainer}>
                    <button ref={this.ham}
                        className={[styles.ham, (isOpenMenu || styles.hamHidded)].join(' ')}
                            onClick={() => this.setState({isOpenMenu: !isOpenMenu})}
                    >
                        <i className="fas fa-bars"/>
                    </button>
                    {this.renderNumberTel()
                    }
                    <div className={styles.socialLinks}>
                       <Viber />
                       <Telegram />
                       <WhatsApp />
                    </div>
                </div>
                <div ref={this.hamList} className={[styles.list, (isOpenMenu || styles.listHidden)].join(' ')}>
                    {this.renderLinks()}
                </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
        document.addEventListener('scroll', this.handleScroll, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
        document.removeEventListener('scroll', this.handleScroll, false);
    }
}

HamMenu.propTypes = {
    links: PropTypes.array,
};

HamMenu.defaultProps = {
    links: []
};

export default HamMenu;
