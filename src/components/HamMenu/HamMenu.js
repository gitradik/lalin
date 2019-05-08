import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PropTypes from 'prop-types';
import Viber from "../SocialLink/Viber";
import Telegram from "../SocialLink/Telegram";
import WhatsApp from "../SocialLink/WhatsApp";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Nav, Navbar} from "react-bootstrap";
import styles from './style.module.sass';

class HamMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isScroll: false,
        };
        this.hamList = React.createRef();
        this.ham = React.createRef();
    }

    renderLinks() {
        const {links} = this.props;
        return links.map((el, i) =>
            <AnchorLink key={i} className={[styles.link, (i === 0 && styles.promotions)].join(' ')} href={`#${el.to}`} onClick={this.handleClickLink}>
                <span>{el.title}</span>
            </AnchorLink>
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
        if (this.hamList.current.classList.contains('show')) {
            this.ham.current.click();
        }
    };

    handleClick = (e) => {
        if (this.hamList.current.contains(e.target) || this.ham.current.contains(e.target)) {
            return;
        }
        if (this.hamList.current.classList.contains('show')) {
            this.ham.current.click();
        }
    };

    renderNumberTel() {
        if (window.scrollY > 119 && window.innerWidth > 399) {
            return <a className={styles.numTel} href="tel:+380997669225">+38 (099) 766-92-25</a>;
        } else if (window.innerWidth > 449) {
            return <a className={styles.numTel} href="tel:+380997669225">+38 (099) 766-92-25</a>;
        }
    };

    render() {
        const {isScroll} = this.state;
        return (
            <div className={[styles.navBarBox, (isScroll && styles.navBarBoxScroll)].join(' ')}>
                <Navbar className={styles.navBar} expand="lg">
                    <Navbar.Toggle ref={this.ham} aria-controls="basic-navbar-nav" />
                    <div className={styles.social}>
                        <Telegram/>
                        <WhatsApp/>
                        <Viber/>
                    </div>
                    <Navbar.Collapse className={styles.navBarCollapse} id="basic-navbar-nav" ref={this.hamList}>
                       <Nav className={["mr-auto", styles.navBarNav].join(' ')}>
                            {this.renderLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
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
