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
 message.setAttribute('rows',10);


let submitBtn = document.createElement('button');
submitBtn.innerText = "Submit";

let map = document.createElement('iframe');
map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6047.708054440741!2d-73.99916390044783!3d40.72122982793534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259860f9f0c93%3A0x40f57b799291d5c5!2s190%20Bowery%2C%20New%20York%2C%20NY%2010012%2C%20USA!5e0!3m2!1sen!2sca!4v1713996572729!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

form.append(namelbl); 
form.append(nameInput);
form.append(messagelbl);
 form.append(message);
 form.append(submitBtn);

 




 divContainer.append(contactHeading);
 divContainer.append(phoneContent);
 divContainer.append(emailContent);
 divContainer.append(form);
 divContainer.append(map);


 contentDiv.append(divContainer);

}