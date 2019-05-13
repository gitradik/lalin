import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';

class Thanks extends React.Component {

    render() {
        const {title, subTitle} = this.props;
        return (
            <div className={styles.thanks}>
                <div className={styles.container}>
                   {/* <div className={styles.text}>

                    </div>*/}
                    {title}
                    <p>{subTitle}</p>
                </div>
            </div>
        );
    }
}

Thanks.propTypes = {
    subTitle: PropTypes.string,
};

Thanks.defaultProps = {
    subTitle: '',
};

export default Thanks;