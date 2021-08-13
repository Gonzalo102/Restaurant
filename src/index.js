import './style.css';
import loadPage from "./loading";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

loadPage();
Home();

const content = document.querySelector('.content');
const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const contactButton = document.querySelector('.contact-button');

homeButton.addEventListener('click', deleteDOM);
homeButton.addEventListener('click', Home);
menuButton.addEventListener('click', deleteDOM);
menuButton.addEventListener('click', Menu);
contactButton.addEventListener('click', deleteDOM);
contactButton.addEventListener('click', Contact);


function deleteDOM () {
    content.removeChild(content.lastElementChild);
}

console.log("hello");

