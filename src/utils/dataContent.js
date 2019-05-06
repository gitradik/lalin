import React from 'react';

const links = [
    {
        title: 'Акции',
        to: 'promotions'
    },
    {
        title: 'О нас',
        to: 'aboutUs'
    },
    {
        title: 'Товары',
        to: 'products'
    },
    {
        title: 'Порядок заказа',
        to: 'order'
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
    instagram: {
        title: "@la_li_lingerie",
        classIcon: "fab fa-instagram",
        color: '#665CAC',
        hrefMobile: 'https://www.instagram.com/la_li_lingerie/',
    },
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
        classIconSecond: "fab fa-whatsapp-square",
        color: '#49C759',
        phone: '+380997669525',
        href: 'whatsapp://send?phone=+380500618460',
        hrefMobile: 'whatsapp://send?phone=+380500618460',
    },
    telegram: {
        title: 'Telegram',
        classIcon: 'fab fa-telegram-plane',
        classIconSecond: "fab fa-telegram",
        color: '#1E96C8',
        phone: '+380997669525',
        href: 'tg://resolve?domain=ksenia_girl',
        hrefMobile: 'tg://resolve?domain=ksenia_girl',
    },
};

const numberPhones = {
    rodion: "+380997669525",
    ksu: "+380500618460"
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
        title: "Акции этой недели",
        promotionProduct: {
            id: 1,
        },
    },
    aboutUs: {
        firstTitle: "Не зря говорят, что красивое нижнее белье оказывает положительное влияние на эмоциональное состояние женщины. Мало иметь пару комплектов на каждый день, хочется баловать себя необычными расцветками, нежным кружевом, уникальным дизайном. Наш магазин представляет выбор стильного белья, как на каждый день, так и на особый случай.",
        secondTitle: "Каждый клиент важен для нас. Поэтому мы делаем максимально все для того, чтоб процесс заказа и получения Вашей покупки был наиболее быстрым и удобным.",
        thirdTitle: "Нам приятно, что Вы выбираете именно наш магазин, а потому у нас всегда найдутся приятные бонусы или вкусные акции. Мы продаем не только стильное нижнее белье, а и дарим чуть больше уверенности в себе и хорошее настроение Вам, милые девушки. Добро пожаловать в мир красивого нижнего белья!",
    },
    reviews: {
        title: "Отзывы",
        images: [
            'direct/direct1.jpg',
            'direct/direct2.jpg',
            'direct/direct3.jpg',
            'direct/direct4.jpg',
            'direct/direct1.jpg',
            'direct/direct2.jpg',
            'direct/direct3.jpg',
            'direct/direct4.jpg',
        ],
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
                        price: 125,
                        discount: null,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ],
                        length: 5
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: null,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: null,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: null,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: null,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: null,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ],
                        length: 5
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
                        discount: null,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ],
                        length: 5
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: null,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: null,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: null,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: null,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: null,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ],
                        length: 5
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
                        discount: null,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ],
                        length: 5
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: null,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: null,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: null,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: null,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: null,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ],
                        length: 5
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
                        discount: null,
                        mainImage: 'beige/1.jpg',
                        images: [
                            'beige/1.jpg',
                            'beige/2.jpg',
                            'beige/3.jpg',
                            'beige/4.jpg',
                            'beige/5.jpg'
                        ],
                        length: 5
                    },
                    {
                        id: 2,
                        name: 'black',
                        color: 'black',
                        sizes: ['M', 'S'],
                        price: 130,
                        discount: null,
                        mainImage: 'black/1.jpg',
                        images: [
                            'black/1.jpg',
                            'black/2.jpg',
                            'black/3.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 3,
                        name: 'blue',
                        color: 'blue',
                        sizes: ['M'],
                        price: 150,
                        discount: null,
                        mainImage: 'blue/1.jpg',
                        images: [
                            'blue/1.jpg',
                            'blue/2.jpg',
                            'blue/3.jpg',
                            'blue/4.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 4,
                        name: 'purple',
                        color: 'purple',
                        sizes: ['M', 'S'],
                        price: 170,
                        discount: null,
                        mainImage: 'purple/1.jpg',
                        images: [
                            'purple/1.jpg',
                            'purple/2.jpg',
                            'purple/3.jpg',
                            'purple/4.jpg',
                            'purple/5.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 5,
                        name: 'white',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 200,
                        discount: null,
                        mainImage: 'white/1.jpg',
                        images: [
                            'white/1.jpg',
                            'white/2.jpg',
                            'white/3.jpg',
                            'white/4.jpg',
                            'white/5.jpg',
                            'white/6.jpg',
                        ],
                        length: 5
                    },
                    {
                        id: 6,
                        name: 'whiteLif',
                        color: 'white',
                        sizes: ['M', 'S', 'XXL'],
                        price: 250,
                        discount: null,
                        mainImage: 'whiteLif/1.jpg',
                        images: [
                            'whiteLif/1.jpg',
                            'whiteLif/2.jpg',
                        ],
                        length: 5
                    },
                ],
            },
        ]
    },
    delivery: {
        cards: [
            {
                name: "Выберите товар",
                photo: "choices.png",
            },
            {
                name: "Добавьте в корзину",
                photo: "add-to-cart.png",
            },
            {
                name: "Заполните форму для оформления заказа",
                photo: "form.png"
            },
            {
                name: "Вам перезвонит наш сотрудник для уточнения всех вопросов",
                photo: "smartphone.png"
            },
            {
                name: "Оплата наложенным платежом",
                photo: "payment-method.png"
            },
        ]
    }
};

export default {
    links, socialLinks, title, titleContactForm,
    titleStock, priceStockBefore, priceStockAfter,
    stockImages, textButton, data, numberPhones
};