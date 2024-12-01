const products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];
function displayProducts() {
    const productList = document.getElementById("product-list");

    // Loop through the products array and create HTML elements
    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Add product details inside the div
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>Description: ${product.description}</p>
        `;

        // Append the product div to the list
        productList.appendChild(productDiv);
    });
}
window.addEventListener("load", displayProducts);
