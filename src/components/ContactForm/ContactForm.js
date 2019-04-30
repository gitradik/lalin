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
        this.setState({
            phone: value,
            isValidPhone: isValidPhone(value)
        });
    };

    onChangeName = (value) => {
        this.setState({
            name: value,
            isValidName: value.length > 0
        });
    };

    renderThanksModal() {
        return this.state.isThanks && <Thanks />
    }

    renderLoader() {
        return this.state.isFetching && <Loader />
    }

    onSubmit = () => {
        const {name, phone} = this.state;
        const {location, product} = this.props;
        const message = `name: ${name}; phone: ${phone}; product: ${product}; location: ${location}`;
        this.setState({isFetching: true});
        axios.post(sendMessage(botToken, chatId, message))
            .then(() => {
                this.setState({
                    isFetching: false, isThanks: true, name: '', phone: '', isValidPhone: false, isValidName: false
                });
            })
            .catch(() => {
                this.setState({ isFetching: false });
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
                            <input className={isValidName || ""}
                                type="text" name="name"
                                   placeholder="Ваше Имя"
                                   value={name}
                                   onChange={(e) => this.onChangeName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <InputMask className={isValidPhone || ""}
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
}

ContactForm.propTypes = {
    location: PropTypes.string,
    title: PropTypes.object,
    product: PropTypes.string,
    textButton: PropTypes.string,
};

ContactForm.defaultProps = {
    location: '',
    title: '',
    product: '',
    textButton: 'Заказать'
};

export default ContactForm;