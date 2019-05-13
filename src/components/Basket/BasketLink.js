import React from 'react';
import styles from './style.module.sass'
import connect from 'react-redux/es/connect/connect';
import {updateBasket} from '../../actions/actionCreator';
import {modalStyle} from "../../utils/modalStyle";
import Modal from "react-responsive-modal";
import Basket from "./Basket";

class BasketLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false}
    }

    render() {
        const {basket} = this.props;
        const {isOpen} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={() => this.setState({isOpen: false})} centered
                >
                    <Basket/>
                </Modal>
            <div className={styles.basketLink} onClick={() => this.setState({isOpen: !isOpen})}>
                <div className={styles.counter}>
                 {basket ? basket.length : 0}
                </div>
               <i className="fas fa-shopping-cart"/>
            </div>
            </>
        );
    }

    componentDidMount() {
        this.props.updateBasket();
    }
}

const mapStateToProps = (state) => {
  const {basket} = state.basketReducer;
  return {basket};
};

const mapDispatchToProps = (dispatch) => ({
    updateBasket: () => dispatch(updateBasket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketLink);