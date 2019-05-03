import React from 'react';
import dataContent from '../../utils/dataContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.sass';
import {dataPromotions} from '../../utils/dataPromotions';
import Slider from "react-slick/lib";
import {slickSettings} from "../../utils/slickImagesGallery/slickSettings";
import Title from "../Title/Title";
import Product from "../Product/Product";

class Promotions extends React.Component {

    renderStockMins() {
        return dataPromotions.map((el, i) =>
            <div key={el.name} className={styles.stockMin}>
                <Product
                    id={el.id}
                    name={el.name}
                    mainImage={el.mainImage}
                    discount={el.discount}
                    color={el.color}
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
                    <Title name="Акции этой недели"/>
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