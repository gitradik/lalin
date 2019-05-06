import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class Triggers extends React.Component {

    renderTriggers() {
        const {triggers} = dataContent;
        return triggers.map((t, i) =>
            <React.Fragment key={i + "trigger"}>
                <div className={styles.trigger}>
                    <i className="fas fa-pepper-hot"/>
                    <p>{t}</p>
                </div>
                <hr/>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div className={styles.triggers}>
                {this.renderTriggers()}
            </div>
        );
    }
}

export default Triggers;