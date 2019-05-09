import React from 'react';
import styles from './style.module.sass';
import Loader from "react-loader-spinner";

export function ImgLoader() {
    return (
        <div className={styles.imgLoader}>
            <Loader type="Hearts" color="#ff54b0" height={80} width={80} />
        </div>
    );
}