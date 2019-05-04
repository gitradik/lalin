import React from 'react';
import styles from './style.module.sass';
import InputMask from 'react-input-mask';
import {isValidPhone} from '../../utils/validationForm';
import PropTypes from 'prop-types';
import {botToken, chatId} from "../../utils/dataTelegram";
import axios from 'axios';
import Thanks from "../Thanks/Thanks";
import Loader from "../Loader/Loader";
import { sendMessage } from '../../api/telegramController';
import cookie from 'react-cookies';
import DATA_COOKIES from '../../utils/dataCookies';
import Modal from "react-responsive-modal";
import {modalStyle} from "../../utils/modalStyle";
import {clearBasket, thanksOn, thanksOff, fetchingOn, fetchingOff} from "../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            isValidName: false,
            isValidPhone: false,
        };
    }

    onChangePhone = (value) => {
        cookie.save(DATA_COOKIES.USER_PHONE, value, {path: process.env.PUBLIC_URL});
        this.setState({
            phone: value,
            isValidPhone: isValidPhone(value)
        });
    };

    onChangeName = (value) => {
        cookie.save(DATA_COOKIES.USER_NAME, value, {path: process.env.PUBLIC_URL});
        this.setState({
            name: value,
            isValidName: value.length > 0
        });
    };

    closeModal = () => {
       this.props.thanksOff();
    };

    getDiscount(price, discount) {
        return price - (price * (discount / 100));
    }

    onSubmit = () => {

        this.props.fetchingOn();

        const {name, phone} = this.state;
        const {location, basket} = this.props;
        let msg = `name: ${name}; phone: ${phone}; location: ${location}; products: `;
        if (basket) {
            basket.map((p, i) => {
                const str = `num: ${i + 1}. name(${p.name}) discount/price(${p.discount}/${p.price}) count(${p.count}) price(${this.getDiscount(p.price, p.discount)}); `;
                msg = msg + str;
                return
            });
        }

        axios.post(sendMessage(botToken, chatId, msg))
            .then(() => {
                this.props.clearBasket();
                this.props.fetchingOff();
                this.props.thanksOn();
            })
            .catch(() => {
                this.props.fetchingOff();
            });
    };

    render() {
        const {textButton, isThanks, isFetching} = this.props;
        const {name, phone, isValidName, isValidPhone} = this.state;
        return (
            <>
                <Modal
                    closeIconSize={38} styles={modalStyle} open={isThanks} onClose={this.closeModal} centered>
                    <Thanks title="Спасибо за покупку!" subTitle="Вам позвонят в ближайшее время"/>
                </Modal>
                {isFetching && <Loader/>}
                <div className={styles.contactForm}>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            {this.props.title}
                        </div>
                        <div className={styles.inputs}>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text" name="name"
                                    placeholder="Ваше Имя"
                                    value={name}
                                    onChange={(e) => this.onChangeName(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <InputMask
                                    placeholder="Ваш номер телефона"
                                    name="phone" mask="+389999999999"
                                    maskChar=" "
                                    value={phone}
                                    onChange={e => this.onChangePhone(e.target.value)}
                                />
                            </div>
                            <div className={styles.inputContainer}>
                                <button disabled={!isValidPhone || !isValidName} onClick={this.onSubmit}
                                        className={[styles.submitBtn, ((isValidPhone && isValidName) && styles.activeSubmit)].join(' ')}>
                                    {textButton}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    componentDidMount() {
        const _name = cookie.load(DATA_COOKIES.USER_NAME);
        const _phone = cookie.load(DATA_COOKIES.USER_PHONE);
        if (_name && _phone) {
            this.setState({
                name: _name,
                phone: _phone,
                isValidName: _name.length > 0,
                isValidPhone: isValidPhone(_phone)
            });
        }
    }
}

ContactForm.propTypes = {
    location: PropTypes.string,
    title: PropTypes.object,
    textButton: PropTypes.string,
};

ContactForm.defaultProps = {
    location: '',
    title: '',
    textButton: 'Заказать',
};

const mapStateToProps = (state) => {
    const {basket} = state.basketReducer;
    const {isThanks, isFetching} = state.contactFormReducer;
    return {basket, isThanks, isFetching};
};

const mapDispatchToProps = (dispatch) => ({
    clearBasket: () => dispatch(clearBasket()),
    thanksOn: () => dispatch(thanksOn()),
    thanksOff: () => dispatch(thanksOff()),
    fetchingOn: () => dispatch(fetchingOn()),
    fetchingOff: () => dispatch(fetchingOff()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);