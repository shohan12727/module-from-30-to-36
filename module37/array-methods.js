const products = [
    { name: 'redmi', brand: 'xiaomi', price: 3000, color: 'black' },
    { name: 'sam', brand: 'samsung', price: 5000, color: 'white' },
    { name: 'iphone', brand: 'apple', price: 10000, color: 'gold' },
    { name: 'apple2', brand: 'apple', price: 12000, color: 'gold' },
    { name: 'redmi2', brand: 'xiaomi', price: 4000, color: 'black' }
];

const result = products.map((product) => {
    console.log(product);
})
// -----------------------------------------------------
products.forEach((product) => {
    console.log(product);
})
// -------------------------------------------------------------
const result2 = products.filter((product) => product.brand === "apple");
console.log(result2);
const result3 = products.filter((product) => product.price > 5000);
console.log(result3);

// -------------------------------------------------------------

const result5 = products.find((product) => {
    return product.name === 'apple2'
})
console.log(result5);



