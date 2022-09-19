export function renderBooks(book) {
    const li = document.createElement('li');
    li.classList.add('book-list');

    const pEl = document.createElement('p');
    pEl.textContent = book.published + '' + book.author;

    const headerEl = document.createElement('h2');
    headerEl.textContent = book.title;

    li.append(headerEl, pEl);

    return li;
}
