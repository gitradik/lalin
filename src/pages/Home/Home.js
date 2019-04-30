import React from 'react';
import styles from './style.module.sass';
import HamMenu from '../../components/HamMenu/HamMenu';
import dataContent from '../../utils/dataContent';
import TitleScroll from '../../components/TitleScroll/TitleScroll';
import Promotions from '../../components/Promotions/Promotions';
import Products from "../../components/Products/Products";
import Delivery from "../../components/Delivery/Delivery";

class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                <HamMenu
                    links={dataContent.links}
                />
                <TitleScroll />
                <Promotions />
                <Products/>
                <Delivery/>
            </div>
        );
    }
}

export default Home;
