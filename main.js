import home from "./pages/home.js";
import aboutme from "./pages/aboutme.js";
import aboutcs50 from "./pages/aboutcs50.js";
import myjourney from "./pages/myjourney.js";
import whatilearned from "./pages/whatilearned.js";

const nav = document.querySelector("nav");
const abtMe = document.querySelector("#about-me");
const abtcs50 = document.querySelector("#about-cs50");
const journey = document.querySelector("#journey");
const learned = document.querySelector("#learned");
const main = document.querySelector("#main");

const init = () => {
  window.addEventListener("hashchange", () => {
    main.innerHTML = "";
    switch (window.location.hash) {
      case "":
        main.appendChild(home());
        break;
      case "#aboutme":
        main.appendChild(aboutme());
        break;
      case "#aboutcs50":
        main.appendChild(aboutcs50());
        break;
      case "#myjourney":
        main.appendChild(myjourney());
        break;
      case "#whatilearned":
        main.appendChild(whatilearned());
        break;
      default:
        main.appendChild(home());
        break;
    }
  });
};

window.addEventListener("load", () => {
  main.appendChild(home());
  window.location.hash = "";
  console.log("hi");
  init();
});

function navigate(link, hash) {
  link.addEventListener("click", () => {
    window.location.hash = hash;
    nav.classList.remove("show");
  });
}

navigate(abtMe, "#aboutme");
navigate(abtcs50, "#aboutcs50");
navigate(journey, "#myjourney");
navigate(learned, "#whatilearned");
