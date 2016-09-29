var shoppingList = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, "image": "../images/jelloman.gif" },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99, "image": "../images/dumble.jpg" },
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44, "image": "../images/grenade.jpg" },
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99, "image": "../images/cookie.jpg"},
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32, "image": "../images/dress.jpg"},
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99, "image": "../images/giles.jpg"},];

function printOrder(list){
 for(var i = 0; i<list.length; i++){
  var nameBox = document.createElement('div');
  nameBox.className = "name";
  nameBox.innerHTML = list[i].name;
  bottomDiv.appendChild(nameBox);
  var imageBox = document.createElement('img');
  imageBox.className = "image";
  imageBox.src = list[i].image;
  bottomDiv.appendChild(imageBox);	
  var descriptionBox = document.createElement('div');
  descriptionBox.className = "description";
  descriptionBox.innerHTML = list[i].description;
  bottomDiv.appendChild(descriptionBox);
  var priceBox = document.createElement('div');
  priceBox.className = "price";
  priceBox.innerHTML = list[i].price;
  bottomDiv.appendChild(priceBox);
}
}
printOrder(shoppingList);