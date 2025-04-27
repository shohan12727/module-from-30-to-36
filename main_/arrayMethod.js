const loop = products.map((product)=>{

    if (product.color==="Black"){
        console.log(product);
    } else {
        console.log("not found");
    }

});      
console.log(loop);


products.forEach(product => {
    if (product.color==="Black"){
        console.log(product);
    } 
})

const products = [
    { id: 1, name: "Smartphone", color: "Black", price: 299.99, brand: "Samsung" },
    { id: 2, name: "Laptop", color: "Silver", price: 899.99, brand: "Dell" },
    { id: 3, name: "Wireless Earbuds", color: "White", price: 59.99, brand: "Sony" },
    { id: 4, name: "Smartwatch", color: "Blue", price: 199.99, brand: "Apple" },
    { id: 5, name: "phone", color: "Black", price: 2022, brand: "xiaomi" }
];

const newArray = products.filter(product => product.price > 500);

console.log(newArray);

const newArray = products.filter(product => product.price > 500);

console.log(newArray);

const newProducts = products.find(p=>p.id===3);
console.log(newProducts);
