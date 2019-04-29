import React from 'react';
import dataContent from '../../utils/dataContent';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockMin from "../StockMin/StockMin";
import styles from './style.module.sass';
import {dataPromotions} from '../../utils/dataPromotions';
import Slider from "react-slick/lib";
import {slickSettings} from "../../utils/slickImagesGallery/slickSettings";
import Modal from "react-responsive-modal";

class Promotions extends React.Component {

    renderStockMins() {
        return dataPromotions.map((el, i) =>
            <div className={styles.stockMin}>
                <StockMin key={i}
                          name={el.name}
                    mainImage={el.mainImage}
                    discount={el.discount}
                    sizes={el.sizes}
                    price={el.price}
                    images={el.images}
                />
            </div>
        )
    }

    render() {
        return (
            <div id={dataContent.links[0].to} className={styles.promotions}>
                <div className={styles.container}>
                    <h2>Акции этой недели</h2>
                    <div className={styles.bordPink}/>
                    <div className={styles.boxes}>
                        <Slider {...slickSettings}>
                            {this.renderStockMins()}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default Promotions;