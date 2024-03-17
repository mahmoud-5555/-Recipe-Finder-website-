const menuBtn = document.querySelector('.menu')
const exitBtn = document.querySelector('.exit')
const menu = document.querySelector('aside')

const ingredients = document.querySelector(".ingredients");
const addBtn = document.querySelector("#add_Ingredient");




addBtn.addEventListener("click", () => {

    // not working make array of objects and append the and details in it next time
//   const ingredientElement = document.createElement("div");
//   ingredientElement.classList.add("ingredient");

//   const ingredientIDLabel = document.createElement("label");
//   ingredientIDLabel.setAttribute("for", "ingredient_id");
//   ingredientIDLabel.textContent = "Ingredient ID";
//   const ingredientIDInput = document.createElement("input");
//   ingredientIDInput.setAttribute("type", "text");
//   ingredientIDInput.classList.add("ingredient_id");

//   const ingredientNameLabel = document.createElement("label");
//   ingredientNameLabel.setAttribute("for", "ingredient_name");
//   ingredientNameLabel.textContent = "Ingredient Name";
//   const ingredientNameInput = document.createElement("input");
//   ingredientNameInput.setAttribute("type", "text");
//   ingredientNameInput.classList.add("ingredient_name");

//   const ingredientQuantityLabel = document.createElement("label");
//   ingredientQuantityLabel.setAttribute("for", "ingredient_quantity");
//   ingredientQuantityLabel.textContent = "Ingredient Quantity";
//   const ingredientQuantityInput = document.createElement("input");
//   ingredientQuantityInput.setAttribute("type", "text");
//   ingredientQuantityInput.classList.add("ingredient_quantity");

//   ingredientElement.appendChild(ingredientIDLabel);
//   ingredientElement.appendChild(ingredientIDInput);
//   ingredientElement.appendChild(ingredientNameLabel);
//   ingredientElement.appendChild(ingredientNameInput);
//   ingredientElement.appendChild(ingredientQuantityLabel);
//   ingredientElement.appendChild(ingredientQuantityInput);

    // ingredientElement.innerHTML =  `
    
    // <div class="ingredient">
    // <label for="ingredient_id">Ingredient ID</label>
    // <input type="text" class="ingredient_id">

    // <label for="Ingredient_name">Ingredient Name</label>
    // <input type="text" class="ingredient_name">

    // <label for="Ingredient_quantity">Ingredient Quantity</label>
    // <input type="text" class="ingredient_quantity">
    // </div>
    
    // `
    

  ingredients.appendChild(ingredientElement);
});







menuBtn.addEventListener('click', function(e) {
    console.log('ehhfs');
    e.preventDefault();
    menu.classList.toggle('toggle-menu');
})
exitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu')
})