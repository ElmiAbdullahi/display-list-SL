// import functions and grab DOM elements
import { candies } from './candies-data.js';
import { renderCandy } from './render-candy.js';
import { books } from './books-data.js';
import { renderBooks } from './render-books.js';
// initialize global state
const candyList = document.getElementById('candy-list');
const booksList = document.getElementById('book-list');
// set event listeners
function displayCandies() {
    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyList.append(candyEl);
    }
}

function displayBooks() {
    for (let book of books) {
        const bookEl = renderBooks(book);
        booksList.append(bookEl);
    }
}

displayCandies();
displayBooks();
// get user input
// use user input to update state
// update DOM to reflect the new state
