import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class Promotions extends React.Component {
    render() {
        return (
            <div id={dataContent.links[0].to} className={styles.promotions}>
                <div className={styles.container}>
                    <div className={styles.bord}/>
                    <div className={styles.flower}/>
                    <div className={styles.flower2}/>
                    <div className={styles.flower3}/>
                    <div className={styles.flower4}/>
                </div>
            </div>
        );
    }
}

export default Promotions;