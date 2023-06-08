import { DOMElements } from './dom-elements.js';
import { Book } from './book.js';
import {
  getBookHolder,
  saveBookHolder,
  getInputData,
  saveInputData,
  deleteBook,
} from './local-storage.js';

const domElements = new DOMElements();

export function addBookToHolder(newBook) {
  const bookHolder = getBookHolder();
  // Check if the book already exists in local storage
  if (bookHolder.some((book) => book.title === newBook.title)) {
    // Book already exists, do nothing
    return;
  }

  bookHolder.push(newBook);
  saveBookHolder(bookHolder);
  displayBooks();
}

export function clearInputData() {
  const inputData = { inputTitle: '', inputAuthor: '' };
  saveInputDataToLocalStorage(inputData);
}

export function addBook() {
  const titleData = domElements.inputTitle.value;
  const authorData = domElements.inputAuthor.value;
  if (titleData === '' || authorData === '') {
    domElements.displayError();
    return;
  }

  const newBook = new Book(titleData, authorData);
  addBookToHolder(newBook);
  clearInputData();
  displayBooks();
  domElements.inputTitle.value = '';
  domElements.inputAuthor.value = '';
  domElements.clearError(); // clear error message
}

export function displayBooks() {
  domElements.bookDisplay.innerHTML = '';
  const bookHolder = getBookHolder();
  bookHolder.forEach((book, index) => {
    const bookInstance = document.createElement('article');
    const dispTitle = `"${book.title}" by ${book.author}`; // Concatenate book title and author
    const delButton = document.createElement('button');
    delButton.textContent = 'Remove';
    delButton.setAttribute('data-index', index);
    delButton.addEventListener('click', () => {
      deleteBook(index);
      displayBooks();
    });
    bookInstance.append(document.createTextNode(dispTitle), delButton);
    domElements.bookDisplay.append(bookInstance);
    // add class to each bookInstance element based on its index
    if (index % 2 === 0) {
      bookInstance.classList.add('book-row-even');
    } else {
      bookInstance.classList.add('book-row-odd');
    }
  });
}

export function saveInputDataToLocalStorage() {
  const inputData = {
    inputTitle: domElements.inputTitle.value,
    inputAuthor: domElements.inputAuthor.value,
  };
  saveInputData(inputData);
}

export function setInputData() {
  const inputData = getInputData();
  domElements.inputTitle.value = inputData.inputTitle;
  domElements.inputAuthor.value = inputData.inputAuthor;
  saveInputDataToLocalStorage(inputData);
}
