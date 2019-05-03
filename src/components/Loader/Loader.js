import React from 'react';
import './style.scss';
import styles from "../../components/Thanks/style.module.sass";
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";

const Loader = () => {

    const onClose = () => {};

    return (
        <Modal className={styles.thanks}
               closeOnEsc={false}
               closeIconSize={38} styles={{
                closeButton: {display: 'none'},
                overlay: modalStyle.overlay,
                modal: modalStyle.modal,
            }} open={true} onClose={onClose} centered>
            <div className="cssload-loader">
                <div className="cssload-inner cssload-one"/>
                <div className="cssload-inner cssload-two"/>
                <div className="cssload-inner cssload-three"/>
            </div>
        </Modal>
    );
};

export default Loader;