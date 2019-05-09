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
import Reviews from "../../components/Reviews/Reviews";
import MessengerCustomerChat from "react-messenger-customer-chat";

class Home extends React.Component {
    render() {
        return (
            <div className={styles.home}>

                <MessengerCustomerChat
                    pageId="1043135292538153"
                    appId="636172186846677"
                />

                <BasketLink/>
                <HamMenu
                    links={dataContent.links}
                />
                <TitleScroll />
                <AboutUs/>
                <Promotions />
                <Products/>
                <Delivery/>
                <Reviews/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
