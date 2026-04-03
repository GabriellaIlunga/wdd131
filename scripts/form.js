const products = [
  {
    id: "lp-2024",
    name: "shimmer lip gloss",
    averagerating: 4.8
  },
  {
    id: "sc-1010",
    name: "rose water toner",
    averagerating: 4.5
  },
  {
    id: "pf-0077",
    name: "velvet vanilla perfume",
    averagerating: 4.9
  },
  {
    id: "hb-5522",
    name: "pastel silk headband",
    averagerating: 4.2
  },
  {
    id: "cn-3344",
    name: "scented soy candle",
    averagerating: 4.7
  }
];


const productSelect = document.querySelector("#productName");


if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; 
        option.textContent = product.name; 
        productSelect.appendChild(option);
    });
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;


if (window.location.pathname.includes("review.html")) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
    
    const displayCount = document.querySelector("#reviewDisplay");
    if (displayCount) {
        displayCount.textContent = reviewCount;
    }
}