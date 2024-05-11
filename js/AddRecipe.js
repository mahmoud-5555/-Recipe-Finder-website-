const menuBtn = document.querySelector('.menu')
const exitBtn = document.querySelector('.exit')
const menu = document.querySelector('aside')
const form = document.querySelector('form');

const ingredients = document.querySelector(".ingredients");
const addBtn = document.querySelector("#add_Ingredient");



const recipeDescriptionEl = document.querySelector('#recipe_description');
const recipeIDEl = document.querySelector('#recipe_id')
const recipeNameEl = document.querySelector('#recipe_name')
const courseNameEl = document.querySelector('#course_name')

console.log(addBtn);



form.addEventListener('submit', (e) => {

    e.preventDefault();

    const recipeID = recipeIDEl.value;
    
})


// addBtn.addEventListener("click", (e) => {

//     e.preventDefault();


//     const recipeID =  recipeIDEl.value;
    
//     const ingredient = {
//       id: document.querySelector('.ingredient_id').value,
//       name: document.querySelector('.ingredient_name').value,
//       quantity: document.querySelector('.ingredient_quantity').value
//     };
    

//     if (recipeID) {
//         let ingredientsList = JSON.parse(localStorage.getItem('recipeID')) || [];
//         ingredientsList.push(ingredient);
//         localStorage.setItem('recipeID', JSON.stringify(ingredientsList));
//     }
  
//     document.querySelector('.ingredient_id').value = '';
//     document.querySelector('.ingredient_name').value = '';
//     document.querySelector('.ingredient_quantity').value = '';

//   });
  

// Adding event listener to the "Add Ingredient" button
addBtn.addEventListener("click", (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Creating a new ingredient container element
  const ingredientElement = document.createElement("div");
  ingredientElement.classList.add("ingredient");

  // Creating and appending the first row of inputs
  const row1 = document.createElement("div");
  row1.classList.add("row-1");

  const col1 = document.createElement("div");
  col1.classList.add("col-1");

  // Creating and appending input fields for Ingredient ID
  const ingredientIDLabel = document.createElement("label");
  ingredientIDLabel.textContent = "Ingredient ID";
  const ingredientIDInput = document.createElement("input");
  ingredientIDInput.setAttribute("type", "text");
  ingredientIDInput.classList.add("ingredient_id");
  col1.appendChild(ingredientIDLabel);
  col1.appendChild(ingredientIDInput);
  row1.appendChild(col1)


  const col2 = document.createElement("div");
  col1.classList.add("col-2");


  // Creating and appending input fields for Ingredient Name
  const ingredientNameLabel = document.createElement("label");
  ingredientNameLabel.textContent = "Ingredient Name";
  const ingredientNameInput = document.createElement("input");
  ingredientNameInput.setAttribute("type", "text");
  ingredientNameInput.classList.add("ingredient_name");

  col2.appendChild(ingredientNameLabel);
  col2.appendChild(ingredientNameInput);
  row1.appendChild(col2)

  // Appending the first row to the ingredient container
  ingredientElement.appendChild(row1);

  // Creating and appending the second row of inputs
  const row2 = document.createElement("div");
  row2.classList.add("row-2");

  // Creating and appending input fields for Ingredient Quantity
  const ingredientQuantityLabel = document.createElement("label");
  ingredientQuantityLabel.textContent = "Ingredient Quantity";
  const ingredientQuantityInput = document.createElement("input");
  ingredientQuantityInput.setAttribute("type", "text");
  ingredientQuantityInput.classList.add("ingredient_quantity");
  row2.appendChild(ingredientQuantityLabel);
  row2.appendChild(ingredientQuantityInput);

  // Appending the second row to the ingredient container
  ingredientElement.appendChild(row2);

  // Appending the new ingredient container to the ingredients container
  ingredients.appendChild(ingredientElement);
});


form.addEventListener('submit', (e) => {

    e.preventDefault();



})



menuBtn.addEventListener('click', function(e) {
    console.log('ehhfs');
    e.preventDefault();
    menu.classList.toggle('toggle-menu');
})
exitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('toggle-menu')
})