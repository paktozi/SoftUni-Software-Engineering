function solve(fruitName, weightFruits, fruitPrice) {
    let totalPrice = weightFruits * fruitPrice;
    totalPrice = (totalPrice / 1000).toFixed(2);
    console.log(`I need $${totalPrice} to buy ${(weightFruits / 1000).toFixed(2)} kilograms ${fruitName}.`);
}
solve('orange', 2500, 1.8);