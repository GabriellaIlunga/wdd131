const perfumes = [
    { 
        name: "Vanilla Baby", 
        family: "Woody", 
        price: 45.00, 
        img: "images/vanilla-baby.webp", 
        top: "Sugar, White Tea",
        middle: "Vanilla Orchid, Marshmallow",
        base: "Cedarwood, Musk",
        usage: "Evening & Night",
        season: "Winter & Autumn",
        iconTime: "🌙",
        iconWeather: "🍂"
    },
    { 
        name: "Golden Glaze", 
        family: "Fresh", 
        price: 45.00, 
        img: "images/golden-glaze.webp", 
        top: "Honey, Bergamot",
        middle: "Orange Blossom",
        base: "Golden Amber, Vanilla",
        usage: "Daytime",
        season: "Summer & Spring",
        iconTime: "☀️",
        iconWeather: "🌻"
    },
    { 
        name: "Unicorn Fruit", 
        family: "Floral", 
        price: 48.00, 
        img: "images/unicorn-fruit.webp", 
        top: "Acai Berry, Matcha",
        middle: "Rose, Peony",
        base: "Sandalwood, Vanilla",
        usage: "Daytime & Afternoon",
        season: "Summer & Spring",
        iconTime: "⛅",
        iconWeather: "🌸"
    },
    { 
        name: "Cherry Baby", 
        family: "Floral", 
        price: 48.00, 
        img: "images/cherry-baby.webp", 
        top: "Red Cherry, Raspberry",
        middle: "Gardenia, Chocolate",
        base: "Amber, Brown Sugar",
        usage: "Evening & Night",
        season: "All Seasons",
        iconTime: "🌙",
        iconWeather: "☁️"
    }
];

let cartTotal = 0;

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const savedTotal = localStorage.getItem('cartTotal');
    if (savedTotal) {
        cartTotal = parseFloat(savedTotal);
        updateCartDisplay();
    }

    displayScentOfTheDay();
    buildLibrary();
    setupMatcher();
    displaySavedMatch();
    setupReviewForm();
    displayReviews();
});

function updateCartDisplay() {
    const counter = document.getElementById('cart-counter');
    if (counter) counter.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

function addToCart(index) {
    cartTotal += perfumes[index].price;
    localStorage.setItem('cartTotal', cartTotal.toFixed(2));
    updateCartDisplay();
}

function buildLibrary() {
    const grid = document.getElementById('perfume-grid');
    if (!grid) return;
    perfumes.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'perfume-card';
        card.innerHTML = `
            <img src="${p.img}" alt="${p.name}" loading="lazy">
            <h3>${p.name}</h3>
            <p class="price-tag">$${p.price.toFixed(2)}</p>
            <div class="scent-notes">
                <p><strong>Top:</strong> ${p.top}</p>
                <p><strong>Middle:</strong> ${p.middle}</p>
                <p><strong>Base:</strong> ${p.base}</p>
            </div>
            <div class="usage-tags">
                <span>${p.iconTime} ${p.usage}</span>
                <span>${p.iconWeather} ${p.season}</span>
            </div>
            <button class="add-btn" onclick="addToCart(${index})">Add to Cart</button>
        `;
        grid.appendChild(card);
    });
}

function displayScentOfTheDay() {
    const card = document.getElementById('scent-card');
    if (!card) return;
    const scent = perfumes[1]; 
    card.innerHTML = `
        <h3>${scent.name}</h3>
        <p class="price-tag">$${scent.price.toFixed(2)}</p>
        <div class="scent-notes" style="text-align: center; border-left: none; border-top: 1px solid var(--gold); border-bottom: 1px solid var(--gold);">
            <p><strong>Featured Profile:</strong> ${scent.top} • ${scent.middle} • ${scent.base}</p>
        </div>
        <div class="usage-tags">
            <span>${scent.iconTime} Best for ${scent.usage}</span>
            <span>${scent.iconWeather} Best in ${scent.season}</span>
        </div>
        <a href="library.html" class="cta-button" style="margin-top: 15px;">Shop Collection</a>
    `;
}

function setupMatcher() {
    const form = document.getElementById('matcher-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const vibe = document.getElementById('vibe').value;
        const match = perfumes.find(p => p.family === vibe) || perfumes[0];
        document.getElementById('match-result').innerHTML = `<div class="match-box">Match: <strong>${match.name}</strong></div>`;
        localStorage.setItem('lastMatch', match.name);
        displaySavedMatch();
    });
}

function displaySavedMatch() {
    const saved = localStorage.getItem('lastMatch');
    const el = document.getElementById('saved-match');
    if (saved && el) el.textContent = saved;
}

function setupReviewForm() {
    const form = document.getElementById('review-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const review = {
            name: document.getElementById('user-name').value,
            product: document.getElementById('product-select').value,
            text: document.getElementById('user-review').value,
            date: new Date().toLocaleDateString()
        };
        let reviews = JSON.parse(localStorage.getItem('userReviews')) || [];
        reviews.unshift(review);
        localStorage.setItem('userReviews', JSON.stringify(reviews));
        form.reset();
        displayReviews();
    });
}

function displayReviews() {
    const list = document.getElementById('reviews-list');
    if (!list) return;
    const reviews = JSON.parse(localStorage.getItem('userReviews')) || [];
    list.innerHTML = reviews.map(r => `
        <div class="review-card">
            <h4>${r.name} - ${r.product}</h4>
            <p>${r.text}</p>
            <small>${r.date}</small>
        </div>
    `).join('');
}

function clearCart() {
    
    cartTotal = 0;
    
    localStorage.removeItem('cartTotal');

    updateCartDisplay();
    alert("Cart has been cleared!");
}

const lastModifiedSpan = document.getElementById('lastModified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}