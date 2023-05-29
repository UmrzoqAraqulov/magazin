const products = [
    {
        "category": "breads",
        "description": "Г/Ц Блинчики c мясом вес, Россия",
        "price": 44.5,
        "skidka":50,
        "rating": 2,
        "discount":2,
        "image": "image/homeImage/blinchk.png",
    },
    {
        "category": "milks",
        "description": "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
        "price": 49.39,
        "skidka":30,
        "rating": 3,
        "image": "image/homeImage/sut.png",
    },
    {
        "category": "meats",
        "description": "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/homeImage/kolbasa.png",
    },
    {
        "category": "candies",
        "description": "Конфеты очень вкусный и приятный десерт",
        "price": 30,
        "skidka":20,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/konfet.png",
    },
    {
        "category": "sweets",
        "description": "Конфеты готовятся из муки и различных фруктов, очень вкусные и вкусные",
        "price": 50,
        "skidka":30,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/shirinlik.png",
    },
    {
        "category": "drinks",
        "description": "безалкогольные и газированные напитки пьют в жаркие летние дни",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/napitka.png",
    },
    {
        "category": "coffees",
        "description": "приятный, ароматный напиток, который заставляет вас чувствовать себя сытым",
        "price": 70.2,
        "skidka":30,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/kofe.png",
    },
    {
        "category": "fruits",
        "description": "плоды сладкие, горькие, кислые, богаты витаминами, полезны",
        "price": 49.7,
        "skidka":50,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/fructo.png",
    },
    {
        "category": "breads",
        "description": "Г/Ц Блинчики c мясом вес, Россия",
        "price": 44.5,
        "skidka":50,
        "rating": 2,
        "discount":2,
        "image": "image/homeImage/blinchk.png",
    },
    {
        "category": "milks",
        "description": "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
        "price": 49.39,
        "skidka":30,
        "rating": 3,
        "image": "image/homeImage/sut.png",
    },
    {
        "category": "meats",
        "description": "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/homeImage/kolbasa.png",
    },
    {
        "category": "candies",
        "description": "Конфеты очень вкусный и приятный десерт",
        "price": 30,
        "skidka":20,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/konfet.png",
    },
    {
        "category": "sweets",
        "description": "Конфеты готовятся из муки и различных фруктов, очень вкусные и вкусные",
        "price": 50,
        "skidka":30,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/shirinlik.png",
    },
    {
        "category": "drinks",
        "description": "безалкогольные и газированные напитки пьют в жаркие летние дни",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/napitka.png",
    },
    {
        "category": "coffees",
        "description": "приятный, ароматный напиток, который заставляет вас чувствовать себя сытым",
        "price": 70.2,
        "skidka":30,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/kofe.png",
    },
    {
        "category": "fruits",
        "description": "плоды сладкие, горькие, кислые, богаты витаминами, полезны",
        "price": 49.7,
        "skidka":50,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/fructo.png",
    },
    {
        "category": "breads",
        "description": "Г/Ц Блинчики c мясом вес, Россия",
        "price": 44.5,
        "skidka":50,
        "rating": 2,
        "discount":2,
        "image": "image/homeImage/blinchk.png",
    },
    {
        "category": "milks",
        "description": "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
        "price": 49.39,
        "skidka":30,
        "rating": 3,
        "image": "image/homeImage/sut.png",
    },
    {
        "category": "meats",
        "description": "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/homeImage/kolbasa.png",
    },
    {
        "category": "candies",
        "description": "Конфеты очень вкусный и приятный десерт",
        "price": 30,
        "skidka":20,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/konfet.png",
    },
    {
        "category": "sweets",
        "description": "Конфеты готовятся из муки и различных фруктов, очень вкусные и вкусные",
        "price": 50,
        "skidka":30,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/shirinlik.png",
    },
    {
        "category": "drinks",
        "description": "безалкогольные и газированные напитки пьют в жаркие летние дни",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/napitka.png",
    },
    {
        "category": "coffees",
        "description": "приятный, ароматный напиток, который заставляет вас чувствовать себя сытым",
        "price": 70.2,
        "skidka":30,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/kofe.png",
    },
    {
        "category": "fruits",
        "description": "плоды сладкие, горькие, кислые, богаты витаминами, полезны",
        "price": 49.7,
        "skidka":50,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/fructo.png",
    },
    {
        "category": "breads",
        "description": "Г/Ц Блинчики c мясом вес, Россия",
        "price": 44.5,
        "skidka":50,
        "rating": 2,
        "discount":2,
        "image": "image/homeImage/blinchk.png",
    },
    {
        "category": "milks",
        "description": "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
        "price": 49.39,
        "skidka":30,
        "rating": 3,
        "image": "image/homeImage/sut.png",
    },
    {
        "category": "meats",
        "description": "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/homeImage/kolbasa.png",
    },
    {
        "category": "candies",
        "description": "Конфеты очень вкусный и приятный десерт",
        "price": 30,
        "skidka":20,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/konfet.png",
    },
    {
        "category": "sweets",
        "description": "Конфеты готовятся из муки и различных фруктов, очень вкусные и вкусные",
        "price": 50,
        "skidka":30,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/shirinlik.png",
    },
    {
        "category": "drinks",
        "description": "безалкогольные и газированные напитки пьют в жаркие летние дни",
        "price": 44.50,
        "skidka":10,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/napitka.png",
    },
    {
        "category": "coffees",
        "description": "приятный, ароматный напиток, который заставляет вас чувствовать себя сытым",
        "price": 70.2,
        "skidka":30,
        "rating": 4,
        "discount":4,
        "image": "image/kategoriyaImage/kofe.png",
    },
    {
        "category": "fruits",
        "description": "плоды сладкие, горькие, кислые, богаты витаминами, полезны",
        "price": 49.7,
        "skidka":50,
        "rating": 5,
        "discount":4,
        "image": "image/kategoriyaImage/fructo.png",
    },
]