const calculateBill = (costPerDish, numberOfPeople) => {
  // Calculate total bill
  const totalBill = costPerDish * numberOfPeople;

  // Calculate bill per person
  const billPerPerson = totalBill / numberOfPeople;

  // Create and return the result object
  const result = {
    totalBill: totalBill,
    billPerPerson: billPerPerson,
  };

  return result;
};

const costPerDish = 20;
const numberOfPeople = 4;

const billDetails = calculateBill(costPerDish, numberOfPeople);
console.log(billDetails);


