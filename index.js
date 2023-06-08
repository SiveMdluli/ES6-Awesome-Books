import { DOMElements } from "./modules/dom-elements.js";
import { handleNavigation } from "./modules/navigation.js";
import { setInputData, addBook, displayBooks } from "./modules/ui.js";

import { getCurrentDateTime } from "./modules/date.js";

const domElements = new DOMElements();
const dateElement = document.querySelector(".date");

function updateDate() {
  const dateTime = getCurrentDateTime();
  dateElement.textContent = dateTime;
}
updateDate();
setInterval(updateDate, 1000);

setInputData();
domElements.addButton.addEventListener("click", addBook);

handleNavigation();

displayBooks();
