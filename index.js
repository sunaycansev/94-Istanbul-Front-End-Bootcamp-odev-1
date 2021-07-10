// Selecting Elements
const btn = document.querySelector("#getFullNameBtn");
const fullName = document.querySelector("#nameSurname");
const age = document.querySelector("#age");
const linkednLink = document.querySelector("#linkedinUrl");
const githubLink = document.querySelector("#githubUrl");

// setting name surname and age variables
const NAME = "Ferhat Sunay";
const SURNAME = "Cansev";
const AGE = 25;

// setting attributes to <a> elements
linkednLink.setAttribute("href", "https://www.linkedin.com/in/fsunaycansev/");
githubLink.setAttribute("href", "https://github.com/sunaycansev");

//getfullName function
function getfullName() {
  fullName.innerHTML = `${NAME} ${SURNAME}`;
  age.innerHTML = AGE;
  btn.style.display = "none";
}
