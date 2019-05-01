import React from 'react';
import styles from './style.module.sass'
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import Thanks from "../Thanks/Thanks";
import Basket from "./Basket";

class BasketLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false}
    }

    closeModal = () => {
        this.setState({isOpen: false})
    };

    render() {
        const {isOpen} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                    <Basket/>
                </Modal>
                <label className={styles.basketLink} htmlFor="basketLink" onClick={() => this.setState({isOpen: true})}>
                    <i className="fas fa-shopping-cart"/>
                </label>
            </>
        );
    }
}

export default BasketLink;