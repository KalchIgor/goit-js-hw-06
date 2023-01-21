const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(el => {
  const item = document.createElement('li');
  item.class = 'item';
  item.textContent = el;
  liArray.push(item);
})

list.append(...liArray);


// Второй вариант
//const list = document.querySelector('#ingredients');

//const markup = ingredients
// .map((el) => `<li class="item">${el}</li>`)
// .join("");

//list.innerHTML = markup;