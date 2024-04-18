export default function displayMenu(){

 let contentDiv = document.querySelector("#content");
 contentDiv.innerHTML = "";

 const menu = [
  {
    name: "Supreme Steak",
    price: "$25.99",
    keyIngredients: ["Prime beef", "Secret seasoning blend"],
    blurb: "Indulge in our signature Supreme Steak, crafted from the finest prime beef and seasoned to perfection with our secret blend of spices. A culinary masterpiece that will tantalize your taste buds and leave you craving for more."
  },
  {
    name: "Seafood Symphony",
    price: "$28.99",
    keyIngredients: ["Fresh seafood selection", "Herb-infused sauce"],
    blurb: "Dive into a symphony of flavors with our Seafood Symphony. Featuring a medley of fresh seafood delicacies paired with a herb-infused sauce, this dish is a culinary journey you won't forget."
  },
  {
    name: "Vegetarian Delight",
    price: "$19.99",
    keyIngredients: ["Seasonal vegetables", "Quinoa blend"],
    blurb: "Savor the goodness of nature with our Vegetarian Delight. Bursting with flavor and nutrition, this dish combines a vibrant selection of seasonal vegetables with a wholesome quinoa blend for a satisfying dining experience."
  },
  {
    name: "Supreme Burger",
    price: "$15.99",
    keyIngredients: ["Grass-fed beef patty", "Brioche bun"],
    blurb: "Treat yourself to our Supreme Burger, made with a juicy grass-fed beef patty sandwiched between a fluffy brioche bun. Topped with fresh ingredients and served with a side of crispy fries, it's a classic favorite done right."
  },
  {
    name: "Mediterranean Pasta",
    price: "$22.99",
    keyIngredients: ["Fresh pasta", "Mediterranean-inspired sauce"],
    blurb: "Transport your taste buds to the shores of the Mediterranean with our tantalizing Mediterranean Pasta. Made with fresh pasta and tossed in a savory sauce bursting with Mediterranean flavors, it's a pasta lover's dream come true."
  },
  {
    name: "Decadent Chocolate Cake",
    price: "$10.99",
    keyIngredients: ["Rich chocolate", "Velvety ganache"],
    blurb: "Indulge your sweet tooth with our Decadent Chocolate Cake. Layers of rich chocolate cake smothered in velvety ganache, this dessert is the perfect ending to your meal, or simply a treat to enjoy anytime."
  }
];

console.log(menu[0].name);



 let divContainer = document.createElement('div');

 let heading = document.createElement('h2');
 heading.innerText = "Menu";

  divContainer.append(heading);

 for( const item in menu){

  console.log(item);

  let cardItem = document.createElement('div');
  cardItem.classList.add("card");

  let itemName = document.createElement('p');
  itemName.innerText = menu[item].name;

  let itemPrice = document.createElement('p');
  itemPrice.innerText = menu[item].price;

  let itemIngredients = document.createElement('p');
  itemIngredients.innerText = menu[item].keyIngredients.join(", ");

  let itemDescription = document.createElement('p');
  itemDescription.innerText = menu[item].blurb;



  cardItem.append(itemName);
  cardItem.append(itemPrice);
  cardItem.append(itemIngredients);
  cardItem.append(itemDescription);


  divContainer.append(cardItem);

 }
 contentDiv.append(divContainer);

}