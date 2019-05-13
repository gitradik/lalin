import React from 'react';
import styles from './style.module.sass';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        const {name, photo, subName} = this.props;
        return (
            <div className={styles.card}>
                <div className={styles.icon}>
               <img src={require(`../../public/images/${photo}`)} alt={photo}/>
                </div>
               <div className={styles.name}>
                   <span>{name}</span>
               </div>
                <hr/>
                <div className={styles.subName}>
                    <span>{subName}</span>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    index: PropTypes.number,
    subName: PropTypes.string,
};

export default Card;