import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';

class Thanks extends React.Component {

    render() {
        const {title, subTitle} = this.props;
        return (
            <div className={styles.thanks}>
                <div className={styles.container}>
                    <div className={styles.text}>
                        <h4>{title}</h4>
                        <p>{subTitle}</p>
                    </div>
                    <i className={["far fa-heart", styles.heard].join(' ')}/>
                    <i className={["far fa-heart", styles.heard1].join(' ')}/>
                    <i className={["far fa-heart", styles.heard2].join(' ')}/>
                    <i className={["far fa-heart", styles.heard3].join(' ')}/>
                </div>
            </div>
        );
    }
}

Thanks.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

Thanks.defaultProps = {
    title: '',
    subTitle: '',
};

export default Thanks;