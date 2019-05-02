import React from 'react';
import styles from './style.module.sass'
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import Basket from "./Basket";
import connect from 'react-redux/es/connect/connect';
import {updateBasket} from '../../actions/actionCreator';
import Loader from 'react-loader-spinner';

class BasketLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            counter: 0
        }
    }

    closeModal = () => {
        this.setState({isOpen: false});
    };

    changeCookies = () => {

    };

    render() {
        const {isOpen, counter} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isOpen} onClose={this.closeModal} centered>
                    <Basket />
                </Modal>
                <div className={styles.basketLink}  onClick={() => this.setState({isOpen: true})}>
                    <div className={styles.counter}>
                        {this.props.isFetching ? <Loader type="Circles" color="#somecolor" height={80} width={80}/> : <p>{counter}</p>}

                    </div>
                    <i className="fas fa-shopping-cart"/>
                </div>
            </>
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps !== this.props) {
            this.setState({counter: this.props.basket.length})
        }
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