const rentalCost = (days, carType) => {
    if (carType == "Economy") {
        return days * 4000;
    } else if (carType == "Midsize") {
        return days * 10000;
    } else if (carType == "Luxury") {
        return days * 20000;
    } else {
        return "Invalid car type!!";
    }
};

let rent = rentalCost(4, "Midsize");

console.log(rent);
