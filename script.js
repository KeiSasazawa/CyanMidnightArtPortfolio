document.addEventListener('DOMContentLoaded', () => {
    const langs = document.querySelector('.langWrap');
    const link = document.querySelectorAll('.langWrap a');

    const home = document.querySelector('.home');
    const gallery = document.querySelector('.gallery');
    const commission = document.querySelector('.commission');

    const heroMainText = document.querySelector('.heroMainText');
    const featuredTitle = document.querySelector('.featuredTitle');
    const aboutTitle = document.querySelector('.aboutTitle');
    const quote1 = document.querySelector('.quote1');
    const quote2 = document.querySelector('.quote2');

    const data = {
        english: {
            home: "Home",
            gallery: "Gallery",
            commission: "Commission",
            heroMainText: "Welcome to Cyan Midnight Art",
            featuredTitle: "Featured Art",
            aboutTitle: "About Me",
            quote1: "Hi I'm Kei, the artist behind Cyan Midnight. I started my art journey to express emotions, dreams, and the things I love into my pieces.",
            quote2: "I work with digital mediums and I love playing with colors to create art with pastel feel."
        },
        japanese: {
            home: "ホーム",
            gallery: "ギャラリー",
            commission: "作品の依頼",
            heroMainText: "ようこそ、Cyan Midnight Artへ",
            featuredTitle: "注目作品",
            aboutTitle: "私について",
            quote1: "こんにちは、Cyan Midnightのアーティスト、Keiです。感情や夢、好きなものを作品に込めたくて、アートを始めました。",
            quote2: "デジタルアートで、パステルな雰囲気の色使いを楽しみながら描いています。"
        }
    };

    link.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            langs.querySelector('.active').classList.remove('active');
            el.classList.add('active');

            const attr = el.getAttribute("language");

            home.textContent = data[attr].home;
            gallery.textContent = data[attr].gallery;
            commission.textContent = data[attr].commission;
            heroMainText.textContent = data[attr].heroMainText;
            featuredTitle.textContent = data[attr].featuredTitle;
            aboutTitle.textContent = data[attr].aboutTitle;
            quote1.textContent = data[attr].quote1;
            quote2.textContent = data[attr].quote2;
        });
    });
});
