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

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            isValidName: false,
            isValidPhone: false,
            isThanks: false,
            isFetching: false,
        };
    }

    onChangePhone = (value) => {
        cookie.save(DATA_COOKIES.USER_PHONE, value, { path: '/' });
        this.setState({
            phone: value,
            isValidPhone: isValidPhone(value)
        });
    };

    onChangeName = (value) => {
        cookie.save(DATA_COOKIES.USER_NAME, value, { path: '/' });
        this.setState({
            name: value,
            isValidName: value.length > 0
        });
    };

    closeModal = () => {
        this.setState({isThanks: false})
    };

    renderThanksModal() {
        return <Modal
            closeIconSize={38} styles={modalStyle} open={this.state.isThanks} onClose={this.closeModal} centered>
            <Thanks title="Спасибо за покупку!" subTitle="Вам позвонят в ближайшее время"/>
        </Modal>;
    }

    renderLoader() {
        return this.state.isFetching && <Loader />
    }

    getDiscount(price, discount) {
        return discount ? price - (price * (discount / 100)) : price;
    }

    onSubmit = () => {
        this.setState({isFetching: true});

        const {name, phone} = this.state;
        const {location, products, onChange} = this.props;
        let msg = `name: ${name}; phone: ${phone}; products: `;
        if (products.length !== 0) {
            products.map((p, i) => {
                const str = `num: ${i + 1}. name(${p.name}) discount+price(${p.discount} ${p.price}) price(${this.getDiscount(p.price, p.discount)}); `;
                msg = msg + str;
                return
            });
            msg = msg + `location: ${location}`;
        }

        axios.post(sendMessage(botToken, chatId, msg))
            .then(() => {
                cookie.remove(DATA_COOKIES.BASKET);
                this.setState({
                    isFetching: false, isThanks: true,
                });
                onChange();
            })
            .catch(() => {
                this.setState({isFetching: false});
            });
    };

    render() {
        const {textButton} = this.props;
        const {name, phone, isValidName, isValidPhone} = this.state;
        return (
            <div className={styles.contactForm}>
                {this.renderLoader()}
                {this.renderThanksModal()}
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
        );
    }

    componentDidMount() {
        const _name = cookie.load(DATA_COOKIES.USER_NAME);
        const _phone = cookie.load(DATA_COOKIES.USER_PHONE);
        this.setState({
            name: _name,
            phone: _phone,
            isValidName: _name.length > 0,
            isValidPhone: isValidPhone(_phone)
        });
    }
}

ContactForm.propTypes = {
    location: PropTypes.string,
    title: PropTypes.object,
    product: PropTypes.string,
    textButton: PropTypes.string,
    products: PropTypes.array,
    onChange: PropTypes.func,
};

ContactForm.defaultProps = {
    location: '',
    title: '',
    product: '',
    textButton: 'Заказать',
    products: []
};

export default ContactForm;