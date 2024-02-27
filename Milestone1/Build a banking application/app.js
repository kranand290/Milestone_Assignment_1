// Define a customer object with keys for name and balance
const customer = {
    name: "John Doe",
    balance: 1000, // Assuming an initial balance for the customer
};

// Function to deposit money into the customer's account
const deposit = (amount) => {
    if (amount > 0) {
        customer.balance += amount;
        console.log(
            `${customer.name} deposited ${amount}. New balance: ${customer.balance}`
        );
    } else {
        console.log("Invalid deposit amount. Please deposit a positive amount.");
    }
};

// Function to withdraw money from the customer's account
const withdraw = (amount) => {
    if (amount > 0 && amount <= customer.balance) {
        customer.balance -= amount;
        console.log(
            `${customer.name} withdrew ${amount}. New balance: ${customer.balance}`
        );
    } else if (amount <= 0) {
        console.log(
            "Invalid withdrawal amount. Please withdraw a positive amount."
        );
    } else {
        console.log("Insufficient funds. Unable to complete the withdrawal.");
    }
};


deposit(500);
deposit(-500); 
withdraw(200); 
withdraw(800); 
withdraw(-600);
deposit(-100); 