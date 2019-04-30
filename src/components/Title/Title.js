import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';

class Title extends React.Component {
    render() {
        const {name, subTitle} = this.props;
        return (
            <div className={styles.title}>
                <h4>{name}</h4>
                {subTitle && <p>{subTitle}</p>}
            </div>
        );
    }
}

Title.propTypes = {
};

Title.propTypes = {
};

export default Title;