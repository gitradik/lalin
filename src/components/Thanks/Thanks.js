import React from 'react';
import styles from './style.module.sass';
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";

class Thanks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: true }
    }

    closeModal = () => {
        this.setState({ isOpen: false })
    };

    render() {
        const { isOpen } = this.state;
        return (
            <Modal
                closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                <div className={styles.thanks}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h4>Спасибо за покупку!</h4>
                            <p>Мы Вам перезвоним в ближайшее время</p>
                        </div>
                        <i className={["far fa-heart", styles.heard].join(' ')}/>
                        <i className={["far fa-heart", styles.heard1].join(' ')}/>
                        <i className={["far fa-heart", styles.heard2].join(' ')}/>
                        <i className={["far fa-heart", styles.heard3].join(' ')}/>
                    </div>
                </div>
            </Modal>
        );
    }
}

export default Thanks;