import React from 'react';

const links = [
    {
        title: 'Акции',
        to: 'promotions'
    },
    {
        title: 'Товары',
        to: 'products'
    },
    {
        title: 'Преимущества',
        to: 'advantages'
    },
    {
        title: 'Отзывы',
        to: 'reviews'
    },
    {
        title: 'Контакты',
        to: 'contacts'
    },
];

const socialLinks = {
    viber: {
        title: 'Viber',
        classIcon: 'fab fa-viber',
        color: '#665CAC',
        phone: '+380997669525',
        href: 'viber:+380997669225',
        hrefMobile: 'viber://add?number+380500618460',
    },
    whatsApp: {
        title: 'WhatsApp',
        classIcon: 'fab fa-whatsapp',
        color: '#49C759',
        phone: '+380997669525',
        href: 'whatsapp://send?phone=+380500618460',
        hrefMobile: 'whatsapp://send?phone=+380500618460',
    },
    telegram: {
        title: 'Telegram',
        classIcon: 'fab fa-telegram-plane',
        color: '#1E96C8',
        phone: '+380997669525',
        href: 'tg://resolve?domain=ksenia_girl',
        hrefMobile: 'tg://resolve?domain=ksenia_girl',
    },
};

const title = "Магия нижнего белья";

const titleContactForm = <span>Заказать сейчас и получить <small style={{color: "red", display: "block", fontSize: "32px"}}>скидку 10%</small></span>;
const textButton = "Получить";

const titleStock = <span>Закажи этот прекрасный комплект со <small style={{color: "red", display: "block", fontSize: "32px"}}>скидкой 10%</small></span>;

const priceStockBefore = 350;
const priceStockAfter = 315;

const stockImages = ['stock.jpg', 'stock1.jpg'];

export default {
    links, socialLinks, title, titleContactForm,
    titleStock, priceStockBefore, priceStockAfter,
    stockImages, textButton
};