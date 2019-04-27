import React from 'react';
import styles from './style.module.sass';
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import PropTypes from 'prop-types';

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
            <Modal className={styles.thanks}
                closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                <div className={styles.thanks}>
                    <div className={styles.container}>
                        <div className={styles.text}>
                            <h4>Спасибо, за заказ!</h4>
                            <p>Вы заказали: {this.props.product}</p>
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

Thanks.propTypes = {
    product: PropTypes.string
};

export default Thanks;