import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        const {name, photo, index} = this.props;
        return (
            <div className={styles.card}>
                <span className={styles.index}>{index}</span>
                <span className={styles.name}>
                    <span>{name}</span>
                </span>
               <img src={require(`../../public/images/${photo}`)} alt={photo}/>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    index: PropTypes.number,
};

export default Card;