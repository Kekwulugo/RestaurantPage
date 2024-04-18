import { add } from "lodash";
import displayHome from "./home";
import displayMenu from "./menu";
import displayAbout from "./about";

let homebtn = document.querySelector('#home');
let menubtn = document.querySelector('#menu');
let aboutbtn = document.querySelector('#about');

homebtn.addEventListener('click',displayHome);
menubtn.addEventListener('click', displayMenu);
aboutbtn.addEventListener('click',displayAbout);

