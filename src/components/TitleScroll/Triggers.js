import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class Triggers extends React.Component {

    renderTriggers() {
        const {triggers} = dataContent;
        return triggers.map((t, i) =>
            <React.Fragment key={i + "trigger"}>
                <div className={styles.trigger}>
                    <i className="fas fa-asterisk"/>
                    <p>{t}</p>
                    {i === triggers.length - 1 && <img src={require('../../public/images/gift-box.png')} alt="git-box"/>}
                </div>
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