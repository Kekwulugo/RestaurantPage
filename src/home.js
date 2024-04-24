export default function displayHome(){

 let contentDiv = document.querySelector("#content");
 contentDiv.innerHTML = "";


 let restaurantInfo = {
  name: "Supreme Restaurant",
  description: "Welcome to Supreme, where culinary excellence meets unparalleled ambiance. Indulge in a symphony of flavors meticulously crafted by our passionate chefs, showcasing the finest ingredients sourced locally and globally. From succulent steaks to delicate seafood creations, each dish is a masterpiece, elevating your dining experience to new heights. Immerse yourself in our chic yet inviting atmosphere, where every detail is designed to enchant your senses. Whether it's an intimate dinner for two or a celebration with loved ones, at Supreme, every moment is savored and every bite is perfection.",
  location: "1234 Fake Address Blvd NW",
  hours: {
   Sunday: "8am - 8pm",
   Monday: "8am - 10pm",
   Tuesday: "8am - 10pm",
   Wednesday: "8am - 10pm",
   Thursday: "8am - 10pm",
   Friday: "8am - 12am",
   Saturday: "10am - 8pm"
  }
 }


 let divContainer = document.createElement('div');

 let heading = document.createElement('h1');
 heading.innerText = restaurantInfo.name;

 let blurb = document.createElement('p');
 blurb.innerText = restaurantInfo.description;

 let hoursHeading = document.createElement('h2');
 hoursHeading.innerText = "Hours of Operation";

 let liList = document.createElement("ul");

 for (const day in restaurantInfo.hours){
  
  const liElement = document.createElement('li');

  liElement.innerText = `${day}: ${restaurantInfo.hours[day]}`;

  liList.append(liElement);
 }

 let locationHeading = document.createElement('h2');
 locationHeading.innerText = "Location";
let locationText = document.createElement('p');
locationText.innerText = restaurantInfo.location;




 
 divContainer.append(heading);
 divContainer.append(blurb);
 divContainer.append(hoursHeading);
 divContainer.append(liList);
 divContainer.append(locationHeading);
 divContainer.append(locationText);

 contentDiv.append(divContainer);


}
