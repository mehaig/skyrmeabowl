$(document).ready(function () {
  // Arrays storing the information about the toppings
  const fruits = [
    {
      name: "Banana",
      image: "https://via.placeholder.com/100?text=Banana",
      calories: 1,
      fat: 0,
      protein: 0.01,
      sugar: 0.12,
    },
    {
      name: "Strawberry",
      image: "https://c02.purpledshub.com/uploads/sites/41/2023/09/GettyImages_154514873.jpg?w=1029&webp=1",
      calories: 6,
      fat: 0.05,
      protein: 0.12,
      sugar: 0.84,
    },
    {
      name: "Blueberry",
      image: "https://www.acquagarden.co.uk/cdn/shop/products/fruit-plants-blueberry-sunshine-blue-1-x-full-plant-in-a-2-litre-pot-975576.jpg?v=1647889418",
      calories: 1,
      fat: 0,
      protein: 0.01,
      sugar: 0.01,
    },
    {
      name: "Apple",
      image: "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
      calories: 1,
      fat: 0,
      protein: 0,
      sugar: 0.1,
    },
    {
      name: "Kiwi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwQjAfVMSv0rvTIJl97anIxiSC29qJZKjXSg&s",
      calories: 1,
      fat: 0.01,
      protein: 0.01,
      sugar: 0.09,
    },
  ];

  const otherToppings = [
    {
      name: "Honey",
      image: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg?w=1155&h=1528",
      calories: 3,
      fat: 0,
      protein: 0,
      sugar: 0.82,
    },
    {
      name: "Dark Chocolate",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.scripps.org%2Fnews_items%2F5317-is-dark-chocolate-healthy&psig=AOvVaw0ZF4MWk-1wX6Js3fKq2jRz&ust=1717343760561000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiiydziuoYDFQAAAAAdAAAAABAE",
      calories: 5.05,
      fat: 0.34,
      protein: 0.04,
      sugar: 0.51,
    },
    {
      name: "Protein Powder",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hzwPPXe2QY4f301q-owKgNqAlzr2IloyCQ&s",
      calories: 4.0,
      fat: 0.09,
      protein: 0.31,
      sugar: 0.1,
    },
  ];

  const bowlSizes = [
    { size: "Small", grams: 20, skyr: 200 },
    { size: "Medium", grams: 40, skyr: 300 },
    { size: "Large", grams: 60, skyr: 400 },
  ];

  // Function to generate a random skyr bowl
  function generateSkyrBowl() {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    const randomOtherTopping =
      otherToppings[Math.floor(Math.random() * otherToppings.length)];
    const randomBowlSize =
      bowlSizes[Math.floor(Math.random() * bowlSizes.length)];

    const fruitAmountInSize = randomBowlSize.grams;
    const fruitCalories = (randomFruit.calories * fruitAmountInSize).toFixed(2);
    const fruitFat = (randomFruit.fat * fruitAmountInSize).toFixed(2);
    const fruitProtein = (randomFruit.protein * fruitAmountInSize).toFixed(2);
    const fruitSugar = (randomFruit.sugar * fruitAmountInSize).toFixed(2);

    const otherToppingAmount = randomBowlSize.grams;
    const otherToppingCalories = (
      randomOtherTopping.calories * otherToppingAmount
    ).toFixed(2);
    const otherToppingFat = (
      randomOtherTopping.fat * otherToppingAmount
    ).toFixed(2);
    const otherToppingProtein = (
      randomOtherTopping.protein * otherToppingAmount
    ).toFixed(2);
    const otherToppingSugar = (
      randomOtherTopping.sugar * otherToppingAmount
    ).toFixed(2);

    let result = `
        
        <div class="card me-3" style="width: 18rem;">
        <img src="${randomFruit.image}" class="card-img-top" alt="${randomFruit.name}">
            <div class="card-body">
            <p><b>Fruit Topping:</b> ${randomFruit.name} - ${fruitAmountInSize}g</p>
            </div>
        </div>
        <div class="card" style="width: 18rem;">
        <img src="${randomOtherTopping.image}" class="card-img-top" alt="${randomOtherTopping.name}">
            <div class="card-body">
            <p><b>Other Topping:</b> ${randomOtherTopping.name} - ${otherToppingAmount}g</p>
            </div>
        </div>
        `;

    $("#result").html(result);
    $(".skyr-bowl-size").html(`<h5 class="card-title mt-2 fw-bold">${randomBowlSize.skyr}g of Skyr</h5>`);
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

    $("#nutritionTableBody").html(nutritionTable);
  }

  // Event listener for the generate button
  $("#generateButton").click(function () {
    generateSkyrBowl();
  });
});
