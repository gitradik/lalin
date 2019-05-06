import React from 'react';
import styles from './style.module.sass';
import HamMenu from '../../components/HamMenu/HamMenu';
import dataContent from '../../utils/dataContent';
import TitleScroll from '../../components/TitleScroll/TitleScroll';
import Promotions from '../../components/Promotions/Promotions';
import Products from "../../components/Products/Products";
import Delivery from "../../components/Delivery/Delivery";
import Footer from "../../components/Footer/Footer";
import BasketLink from "../../components/Basket/BasketLink";
import AboutUs from "../../components/AboutUs/AboutUs";

class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>
                <BasketLink/>
                <HamMenu
                    links={dataContent.links}
                />
                <TitleScroll />
                <AboutUs/>
                <Promotions />
                <Products/>
                <Delivery/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
