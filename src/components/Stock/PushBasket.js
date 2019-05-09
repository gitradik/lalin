import React from 'react';
import styles from './style.module.sass'
import connect from 'react-redux/es/connect/connect';
import dataContent from '../../utils/dataContent';
import {pushInBasket} from "../../actions/actionCreator";
import PropTypes from 'prop-types';

class PushBasket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isChoiceSize: false,
            sizeKey: dataContent.data.stock.sizes[0]
        };
        this.form = React.createRef();
        this.choiceSizes = React.createRef();
    }

    renderSize() {
        const {sizes} = dataContent.data.stock;
        const {sizeKey} = this.state;
        return sizes.map((el, i) =>
            <React.Fragment key={el}>
                <div onClick={() => this.onClickSize(el)}
                     className={[styles.size, (sizeKey === el && styles.activeSize)].join(' ')} key={i}>{el}</div>
            </React.Fragment>
        );
    }

    onClickSize(size) {
        this.setState({sizeKey: size})
    }

    handleClick = (e) => {
        if (this.choiceSizes.current) {
            if (!this.choiceSizes.current.contains(e.target) && e.target !== this.form.current) {
                this.setState({isChoiceSize: false})
            }
        }
    };

    onClickForm = () => {
        this.setState((state) => {
            return {isChoiceSize: !state.isChoiceSize};
        })
    };

    onClickChoice = () => {
        const {sizeKey} = this.state;
        const {id, name, mainImage, discount, color, price, images} = dataContent.data.stock;
        this.props.pushInBasket({id, name, mainImage, discount, color, size: sizeKey, price, images, count: 1});
        this.props.onClickPush();
    };

    render() {
        const {isChoiceSize} = this.state;
        return (
            <>
                <div ref={this.choiceSizes} className={[styles.choiceSize, (isChoiceSize && styles.viewChoiceSize)].join(' ')}>
                    <p>Выберите свой размер: </p>
                    <div className="d-flex justify-content-center mt-2">
                        {this.renderSize()}
                    </div>
                    <button className={styles.submit} onClick={this.onClickChoice}>Выбрать</button>
                </div>
                <div className={styles.pushBasket} onClick={this.onClickForm}>
                    <img ref={this.form} src={require('../../public/images/add.png')} alt="add"/>
                    <div className={styles.basketIcon}>
                        <i className="fas fa-shopping-cart"/>
                    </div>
                </div>
            </>
        );
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }
}

PushBasket.propTypes = {
    name: PropTypes.string,
    sizeKey: PropTypes.string,
    color: PropTypes.string,
    onClickPush: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
    pushInBasket: (product) => dispatch(pushInBasket(product))
});

export default connect(null, mapDispatchToProps)(PushBasket);

