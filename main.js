
let name = "Jack";
let quantity = 5;
let price = 20;
let itemType = "books"; 

// Discount details
let discountRate = 0.10; // 10% discount
let discountAmount = price * discountRate; 
let discountedPrice = price - discountAmount; 
let totalCost = discountedPrice * quantity; 

// Summary message
console.log(`${name} bought ${quantity} ${itemType} for a total of $${totalCost.toFixed(2)} (after discount).`);
