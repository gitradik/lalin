import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';
import InputMask from 'react-input-mask';
import {isValidPhone} from '../../utils/validationForm';
import PropTypes from 'prop-types';
import {botToken, chatId} from "../../utils/dataTelegram";
import axios from 'axios';


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            isValidName: false,
            isValidPhone: false
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
            name: value.trim(),
            isValidName: value.length > 0
        });
    };

    onSubmit = () => {
        const {name, phone} = this.state;
        const {location} = this.props;
        const message = "name: " + name + "; phone: " + phone + "; location: " + location + ";";
        axios.post(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`)
            .then(result => {

            })
            .catch(err => {

            });

    };

    render() {
        const {name, phone, isValidName, isValidPhone} = this.state;
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.bord}/>
                    <div className={styles.title}>
                        {dataContent.titleContactForm}
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.inputContainer} style={{paddingRight: "10px"}}>
                            <input type="text" name="name"
                                   placeholder="Ваше Имя"
                                   value={name}
                                   onChange={(e) => this.onChangeName(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputContainer} style={{paddingLeft: "10px"}}>
                            <InputMask placeholder="Ваш номер телефона"
                                       name="phone" mask="+389999999999"
                                       maskChar=" "
                                       value={phone}
                                       onChange={e => this.onChangePhone(e.target.value)}
                            />
                        </div>
                        <div className={styles.inputContainer}>
                            <button disabled={!isValidPhone || !isValidName} onClick={this.onSubmit}
                                    className={[styles.submitBtn, ((isValidPhone && isValidName) && styles.activeSubmit)].join(' ')}>
                                Заказать
                            </button>
                        </div>
                    </div>
                    <div className={styles.bord}/>
                </div>
            </div>
        );
    }
}

ContactForm.propTypes = {
    location: PropTypes.string
};

ContactForm.defaultProps = {
    location: 'hz'
};

export default ContactForm;