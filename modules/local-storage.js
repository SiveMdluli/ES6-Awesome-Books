export const getBookHolder = () => JSON.parse(localStorage.getItem('storedBooks')) || [];

export const saveBookHolder = (bookHolder) => {
  localStorage.setItem('storedBooks', JSON.stringify(bookHolder));
};

export const getInputData = () => JSON.parse(localStorage.getItem('inputdata')) || {};

export const saveInputData = (inputData) => {
  localStorage.setItem('inputdata', JSON.stringify(inputData));
};

export const deleteBook = (index) => {
  const bookHolder = getBookHolder();
  bookHolder.splice(index, 1);
  saveBookHolder(bookHolder);
};
