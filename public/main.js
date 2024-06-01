$(document).ready(function() {
    // Arrays storing the information about the toppings
    const fruits = [
        { name: 'Banana', image: 'https://via.placeholder.com/100?text=Banana', calories: 0.89, fat: 0.3, protein: 1.1, sugar: 12.2 },
        { name: 'Strawberry', image: 'https://via.placeholder.com/100?text=Strawberry', calories: 0.32, fat: 0.3, protein: 0.8, sugar: 4.9 },
        { name: 'Blueberry', image: 'https://via.placeholder.com/100?text=Blueberry', calories: 0.57, fat: 0.3, protein: 0.7, sugar: 9.7 },
        { name: 'Apple', image: 'https://via.placeholder.com/100?text=Apple', calories: 0.52, fat: 0.2, protein: 0.3, sugar: 10.4 },
        { name: 'Kiwi', image: 'https://via.placeholder.com/100?text=Kiwi', calories: 0.61, fat: 0.5, protein: 1.1, sugar: 9.0 }
    ];

    const otherToppings = [
        { name: 'Honey', image: 'https://via.placeholder.com/100?text=Honey', calories: 3.04, fat: 0, protein: 0.06, sugar: 82.4 },
        { name: 'Dark Chocolate', image: 'https://via.placeholder.com/100?text=Dark+Chocolate', calories: 5.46, fat: 30.0, protein: 7.9, sugar: 24.0 },
        { name: 'Protein Powder', image: 'https://via.placeholder.com/100?text=Protein+Powder', calories: 4.00, fat: 1.0, protein: 20.0, sugar: 1.0 }
    ];

    const bowlSizes = [
        { size: 'Small', grams: 20 ,skyr: 200},
        { size: 'Medium', grams: 40 , skyr: 300},
        { size: 'Large', grams: 60 , skyr: 400},
    ];

    // Function to generate a random skyr bowl
    function generateSkyrBowl() {
        const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
        const randomOtherTopping = otherToppings[Math.floor(Math.random() * otherToppings.length)];
        const randomBowlSize = bowlSizes[Math.floor(Math.random() * bowlSizes.length)];

        const fruitAmountInSize = randomBowlSize.grams;
        const fruitCalories = (randomFruit.calories * fruitAmountInSize).toFixed(2);
        const fruitFat = (randomFruit.fat * fruitAmountInSize).toFixed(2);
        const fruitProtein = (randomFruit.protein * fruitAmountInSize).toFixed(2);
        const fruitSugar = (randomFruit.sugar * fruitAmountInSize).toFixed(2);

        const otherToppingAmount = randomBowlSize.grams;
        const otherToppingCalories = (randomOtherTopping.calories * otherToppingAmount).toFixed(2);
        const otherToppingFat = (randomOtherTopping.fat * otherToppingAmount).toFixed(2);
        const otherToppingProtein = (randomOtherTopping.protein * otherToppingAmount).toFixed(2);
        const otherToppingSugar = (randomOtherTopping.sugar * otherToppingAmount).toFixed(2);

        let result = `
            <p>Base: Skyr ${randomBowlSize.skyr}</p>
            <img src="${randomFruit.image}" alt="${randomFruit.name}">
            <p>Fruit Topping: ${randomFruit.name} - ${fruitAmountInSize}g</p>
            <img src="${randomOtherTopping.image}" alt="${randomOtherTopping.name}">
            <p>Other Topping: ${randomOtherTopping.name} - ${otherToppingAmount}g</p>
        `;

        $('#result').html(result);

        let nutritionTable = `
            <tr>
                <td>${randomFruit.name}</td>
                <td>${fruitAmountInSize}</td>
                <td>${fruitCalories}</td>
                <td>${fruitFat}</td>
                <td>${fruitProtein}</td>
                <td>${fruitSugar}</td>
            </tr>
            <tr>
                <td>${randomOtherTopping.name}</td>
                <td>${otherToppingAmount}</td>
                <td>${otherToppingCalories}</td>
                <td>${otherToppingFat}</td>
                <td>${otherToppingProtein}</td>
                <td>${otherToppingSugar}</td>
            </tr>
        `;

        $('#nutritionTableBody').html(nutritionTable);
    }

    // Event listener for the generate button
    $('#generateButton').click(function() {
        generateSkyrBowl();
    });
});
