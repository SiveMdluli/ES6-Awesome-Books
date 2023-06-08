export class DOMElements {
  constructor() {
    this.container = document.querySelector(".container");
    this.header = document.querySelector(".Pagetitle");
    this.form = document.querySelector(".form");
    this.bookDisplay = document.querySelector(".bookDisplay");
    this.inputTitle = document.querySelector(".title");
    this.inputAuthor = document.querySelector(".author");
    this.addButton = document.querySelector(".add");
    this.error = document.createElement("span");
    this.error.className = "error";
    this.error.textContent = "Please fill out all fields.";
  }

  displayError() {
    const error = document.querySelector(".error");
    error.innerHTML = "<p>Please fill in all fields</p>";
  }

  clearError() {
    const error = document.querySelector(".error");
    error.innerHTML = "";
  }
}
