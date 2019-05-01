import React from 'react';
import styles from './style.module.sass';
import Title from "../Title/Title";
import dataContent from '../../utils/dataContent';
import {Tab, Tabs} from "react-bootstrap";
import {Container, Row, Col} from 'react-bootstrap';
import Product from "../Product/Product";
import './tabs.sass';

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: dataContent.data.products.tabs[0].key
        }
    }

    renderTabs() {
        const {tabs} = dataContent.data.products;
        return tabs.map(tab =>
            <Tab key={tab.key} eventKey={tab.key} title={tab.title}>
               <Container fluid={true}>
                   <Row className="justify-content-start">
                {
                    tab.products.map(p =>
                        <Col key={p.id + "prod"} xs={6} sm={4} lg={2} md={3} className="col d-flex justify-content-center my-2">
                            <Product
                                id={p.id}
                                name={p.name}
                                mainImage={p.mainImage}
                                discount={p.discount}
                                color={p.color}
                                sizes={p.sizes}
                                price={p.price}
                                images={p.images}
                            />
                        </Col>
                    )
                }
                   </Row>
                </Container>
            </Tab>
        );
    }

    render() {
        return (
            <div id="products" className={styles.products}>
                <Title name={dataContent.data.products.title}/>
                <Tabs className={styles.tabs}
                    id="controlled-tab-example"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    {this.renderTabs()}
                </Tabs>
            </div>
        );
    }
}

export default Products;