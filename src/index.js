"use strict";
function calculateTotal(price, quantity, discount = 0) {
    const discountPrice = price - (price * discount) / 100;
    return discountPrice * quantity;
}
console.log(calculateTotal(10, 5));
let id = 10;
function displayId(id) {
    return typeof id === "string" ? id.toUpperCase() : id * 10;
}
console.log(displayId("hello"));
console.log(displayId(4));
let orders = [
    { orderId: "1", amount: 100, status: "pending" },
    { orderId: "2", amount: 200, status: "shipped" },
    { orderId: "3", amount: 300, status: "delivered" },
    { orderId: "4", amount: 400, status: "pending" },
];
function filterOrdersByStatus(orders, status) {
    if (status === "pending") {
        return orders.filter((order) => order.status === "pending");
    }
    else if (status === "shipped") {
        return orders.filter((order) => order.status === "shipped");
    }
    else if (status === "delivered") {
        return orders.filter((order) => order.status === "delivered");
    }
    else {
        return [];
    }
}
console.log(filterOrdersByStatus(orders, "pending"));
let productInfo = ["product", 10, 100];
function updateStock(inventory, productInfo) {
    const [name, price, quantity] = productInfo;
    inventory[name] = quantity;
    return inventory;
}
console.log(updateStock({ "product V": 10, "product C": 1 }, productInfo));
