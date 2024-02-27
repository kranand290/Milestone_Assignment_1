let customerCart = [
    { itemName: "Product 1", unitPrice: 20.99, quantity: 2 },
    { itemName: "Product 2", unitPrice: 15.49, quantity: 1 },
    { itemName: "Product 3", unitPrice: 5.99, quantity: 3 },
];

const calculateTotalCost = (cart) => {
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        totalCost += item.unitPrice * item.quantity;
    }

    return totalCost;
};
const totalCost = calculateTotalCost(customerCart);
console.log(totalCost);

