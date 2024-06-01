$(document).ready(function () {
  // Arrays storing the information about the toppings
  const fruits = [
    {
      name: "Banana",
      image: "https://tontalla.sirv.com/fruits/pexels-apasaric-2872755.jpg",
    },
    {
      name: "Strawberry",
      image: "https://tontalla.sirv.com/fruits/pexels-pixabay-70746.jpg",
    },
    {
      name: "Blueberry",
      image: "https://tontalla.sirv.com/fruits/pexels-veeterzy-70862.jpg",
    },
    {
      name: "Apple",
      image: "https://tontalla.sirv.com/fruits/pexels-mali-102104.jpg",
    },
    {
      name: "Kiwi",
      image: "https://tontalla.sirv.com/fruits/pexels-helioz-54370.jpg",
    },
    {
      name: "Pineapple",
      image: "https://tontalla.sirv.com/fruits/pexels-psco-137119.jpg",
    },
    {
      name: "Mango",
      image:
        "https://tontalla.sirv.com/fruits/pexels-roman-odintsov-4955253.jpg",
    },
    {
      name: "Grapes",
      image: "https://tontalla.sirv.com/fruits/pexels-qjpioneer-708777.jpg",
    },
    {
      name: "Orange",
      image: "https://tontalla.sirv.com/fruits/pexels-pixabay-161559.jpg",
    },
    {
      name: "Watermelon",
      image:
        "https://tontalla.sirv.com/fruits/pexels-fotios-photos-1398655.jpg",
    },
  ];

  const otherToppings = [
    {
      name: "Honey",
      image:
        "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/04/honey-1296x728-header.jpg?w=1155&h=1528",
    },
    {
      name: "Dark Chocolate",
      image:
        "https://www.embassychocolate.com/hs-fs/hubfs/What%20Is%20Dark%20Chocolate.jpg?width=521&name=What%20Is%20Dark%20Chocolate.jpg",
    },
    {
      name: "Protein Powder",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hzwPPXe2QY4f301q-owKgNqAlzr2IloyCQ&s",
    },
  ];

  const bowlSizes = [
    { size: "Small", grams: 20, skyr: 200 },
    { size: "Medium", grams: 40, skyr: 300 },
    { size: "Large", grams: 60, skyr: 400 },
  ];

  // Function to generate a random skyr bowl
  function generateSkyrBowl() {
    const numFruits = parseInt($("#fruitSlider").val());
    const numToppings = parseInt($("#toppingSlider").val());

    const selectedFruits = [];
    const selectedToppings = [];

    while (selectedFruits.length < numFruits) {
      const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
      if (!selectedFruits.includes(randomFruit)) {
        selectedFruits.push(randomFruit);
      }
    }

    while (selectedToppings.length < numToppings) {
      const randomOtherTopping =
        otherToppings[Math.floor(Math.random() * otherToppings.length)];
      if (!selectedToppings.includes(randomOtherTopping)) {
        selectedToppings.push(randomOtherTopping);
      }
    }

    const randomBowlSize =
      bowlSizes[Math.floor(Math.random() * bowlSizes.length)];

    let result = "";

    selectedFruits.forEach((fruit) => {
      result += `
          <div class="card col col-12 col-md-6 col-xl-1 p-2 mb-3 d-flex flex-row align-items-center" style="width: 18rem;">
            <img loading="lazy" src="${fruit.image}" width="50" height="50" class="rounded-circle me-3 ms-2" alt="${fruit.name}">
            <div class="card-body p-0">
              <p class="m-0"><b>Fruit:</b> ${fruit.name} - ${randomBowlSize.grams}g</p>
            </div>
          </div>`;
    });

    selectedToppings.forEach((topping) => {
      result += `
          <div class="card col col-12 col-md-6 col-xl-1 p-2 mb-3 d-flex flex-row align-items-center" style="width: 18rem;">
            <img loading="lazy" src="${topping.image}" width="50" height="50" class="rounded-circle me-3 ms-2" alt="${topping.name}">
            <div class="card-body p-0">
              <p class="m-0"><b>Topping:</b> ${topping.name} - ${randomBowlSize.grams}g</p>
            </div>
          </div>`;
    });

    $("#result").html(result);
    $(".skyr-bowl-size").html(
      `<h5 class="card-title mt-2 fw-bold">${randomBowlSize.skyr}g of Skyr</h5>`
    );
  }

  // Event listeners for the generate button and sliders
  $("#generateButton").click(function () {
    generateSkyrBowl();
  });

  $("#fruitSlider").on("input", function () {
    $("#fruitCount").text($(this).val());
  });

  $("#toppingSlider").on("input", function () {
    $("#toppingCount").text($(this).val());
  });
});
