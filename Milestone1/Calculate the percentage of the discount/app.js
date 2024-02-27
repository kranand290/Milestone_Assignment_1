const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the percentage discount
    const percentageDiscount = ((originalPrice - discountedPrice) / originalPrice) * 100;

    // Round off to two decimal places
    const roundedPercentageDiscount = percentageDiscount.toFixed(2);

    return parseFloat(roundedPercentageDiscount); // Convert back to a number
};

// Example usage
const originalPrice = 499;
const discountedPrice = 80;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

console.log("Discount Percentage: " + discountPercentage + "%");
