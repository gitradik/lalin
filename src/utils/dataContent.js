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

const title = "Кружевное нежное бельe";

const titleContactForm = <span>Заказать сейчас и получить <small style={{color: "red", display: "block", fontSize: "32px"}}>скидку 10%</small></span>;
const textButton = "Получить";

const titleStock = <span>Закажи этот прекрасный комплект <small style={{color: "red", display: "block", fontSize: "32px"}}>скидка 10%</small></span>;

const priceStockBefore = 350;
const priceStockAfter = 315;

const stockImages = ['stock.jpg', 'stock1.jpg'];

const data = {
    titleScroll: {},
    promotions: {
        title: "Акции этой недели"
    },
    products: {
        title: "Товары",
        tabs: [
            {
                title: "Стринги",
                key: 'thong',
                products: [
                    {
                        id: 1,
                        name: 'beige',
                        color: 'beige',
                        sizes: ['M', 'S', 'Xl'],
                        price: 120,
                        discount: 15,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ]
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: 10,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ]
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: 20,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ]
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: 15,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ]
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: 10,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ]
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: 17,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ]
                    },
                ],
            },
            {
                title: "Обычные",
                key: 'ordinary',
                products: [
                    {
                        id: 1,
                        name: 'beige',
                        color: 'beige',
                        sizes: ['M', 'S', 'Xl'],
                        price: 120,
                        discount: 15,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ]
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: 10,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ]
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: 20,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ]
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: 15,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ]
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: 10,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ]
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: 17,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ]
                    },
                ],
            },
            {
                title: "Лифчики",
                key: 'brassiere',
                products: [
                    {
                        id: 1,
                        name: 'beige',
                        color: 'beige',
                        sizes: ['M', 'S', 'Xl'],
                        price: 120,
                        discount: 15,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ]
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: 10,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ]
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: 20,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ]
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: 15,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ]
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: 10,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ]
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: 17,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ]
                    },
                ],
            },
            {
                title: "Комплекты",
                key: 'kits',
                products: [
                    {
                        id: 1,
                        name: 'beige',
                        color: 'beige',
                        sizes: ['M', 'S', 'Xl'],
                        price: 120,
                        discount: 15,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ]
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: 10,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ]
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: 20,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ]
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: 15,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ]
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: 10,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ]
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: 17,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ]
                    },
                ],
            },
        ]
    },
    delivery: {
        cards: [
            {
                name: "Выбор товара",
                photo: "choices.png",
            },
            {
                name: "Заполнение формы",
                photo: "form.png"
            },
            {
                name: "Уточнение всех вопросов",
                photo: "smartphone.png"
            },
            {
                name: "Отправка Новой почтой",
                photo: "international.png"
            },
            {
                name: "Оплата при получении",
                photo: "payment-method.png"
            },
        ]
    }
};

export default {
    links, socialLinks, title, titleContactForm,
    titleStock, priceStockBefore, priceStockAfter,
    stockImages, textButton, data
};