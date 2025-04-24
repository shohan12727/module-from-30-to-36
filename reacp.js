// const newProducts = products.map((p) => {
//     if (p.name === "phone") {
//         p.price = p.price + 100;
//     }
//     return p;

// })
// console.log(newProducts);

// const array = products.map((product) => {
//     if (product.name === "phone") {
//         product.price = product.price + 100;
//     }
//     return product;
// })

// console.log(array);

const products = [
    { id: 1, name: "phone", color: "Black", price: 299.99, brand: "Samsung" },
    { id: 2, name: "Laptop", color: "Silver", price: 899.99, brand: "Dell" },
    { id: 3, name: "Wireless Earbuds", color: "White", price: 59.99, brand: "Sony" },
    { id: 4, name: "Smartwatch", color: "Blue", price: 199.99, brand: "Apple" },
    { id: 5, name: "phone", color: "Black", price: 2022, brand: "xiaomi" }
];




const newibiesProducts = products.filter((product) => {
    return product.color === "Black"
})
console.log(newibiesProducts);

