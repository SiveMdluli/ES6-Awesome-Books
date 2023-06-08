export function getBookHolder() {
  return JSON.parse(localStorage.getItem('storedBooks')) || [];
}

export function saveBookHolder(bookHolder) {
  localStorage.setItem('storedBooks', JSON.stringify(bookHolder));
}

export function getInputData() {
  return JSON.parse(localStorage.getItem('inputdata')) || {};
}

export function saveInputData(inputData) {
  localStorage.setItem('inputdata', JSON.stringify(inputData));
}

export function deleteBook(index) {
  const bookHolder = getBookHolder();
  bookHolder.splice(index, 1);
  saveBookHolder(bookHolder);
}
