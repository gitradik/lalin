import React from 'react';
import styles from './style.module.sass';
import dataContent from '../../utils/dataContent';

class Triggers extends React.Component {

    renderTriggers() {
        const {triggers} = dataContent;
        const lastIndex = triggers.length - 1;
        return triggers.map((t, i) =>
            <React.Fragment key={i + "trigger"}>
                <div className={[styles.trigger, lastIndex === i ? "justify-content-center" : ""].join(' ')}>
                    {i !== lastIndex && <i className="fas fa-asterisk"/>}
                    {i === lastIndex && <img src={require('../../public/images/gift-box.png')} alt="git-box"/>}
                    <p>{t}</p>
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