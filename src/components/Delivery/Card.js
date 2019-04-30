import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        const {name, photo} = this.props;
        return (
            <div className={styles.card} >
                <img src={require(`../../public/images/${photo}`)} alt={photo}/>
                <span className={styles.name}>{name}</span>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
};

export default Card;