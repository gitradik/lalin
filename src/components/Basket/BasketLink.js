import React from 'react';
import styles from './style.module.sass'
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import Basket from "./Basket";
import connect from 'react-redux/es/connect/connect';
import {updateBasket} from '../../actions/actionCreator';

class BasketLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    closeModal = () => {
        this.setState({isOpen: false});
    };

    render() {
        const {isOpen} = this.state;
        const {basket} = this.props;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                    <Basket />
                </Modal>
                <div className={styles.basketLink}  onClick={() => this.setState({isOpen: true})}>
                    <div className={styles.counter}>
                        <p>{basket ? basket.length : 0}</p>
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
  const {basket, isFetching} = state.basketReducer;
  return {basket, isFetching};
};

const mapDispatchToProps = (dispatch) => ({
    updateBasket: () => dispatch(updateBasket())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketLink);