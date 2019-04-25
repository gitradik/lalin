import React from 'react';
import styles from './style.module.sass';

class Logo extends React.Component {
    render() {
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.logo} />
                </div>
            </div>
        );
    }
}

export default Logo;