export default function displayAbout(){

  let contentDiv = document.querySelector("#content");
 contentDiv.innerHTML = "";

 let contactInfo = {
  phone: "403-123-4567",
  email: "notreal@supremerestaurant.com"

 }
 let divContainer = document.createElement('div');
 let contactHeading = document.createElement('h2');
 contactHeading.innerText = "Contact Us";

 let phoneContent = document.createElement('h3');
 phoneContent.innerText = "Phone:  " + contactInfo.phone;

 let emailContent = document.createElement('h3');
 emailContent.innerText = "Email: " + contactInfo.email;

 let form = document.createElement('form');

let namelbl = document.createElement('label');
namelbl.innerText = "Name";
 let nameInput = document.createElement('input');

 let messagelbl = document.createElement('label');
 messagelbl.innerText = "Your Message";
 let message = document.createElement('textarea');


let submitBtn = document.createElement('button');
submitBtn.innerText = "Submit";

form.append(namelbl); 
form.append(nameInput);
form.append(messagelbl);
 form.append(message);
 form.append(submitBtn);

 




 divContainer.append(contactHeading);
 divContainer.append(phoneContent);
 divContainer.append(emailContent);
 divContainer.append(form);


 contentDiv.append(divContainer);

}