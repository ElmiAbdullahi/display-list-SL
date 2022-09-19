export function renderCandy(candy) {
    const li = document.createElement('li');
    li.classList.add('candy-list');

    const pEl = document.createElement('p');
    pEl.textContent = candy.flavor + '' + candy.type;

    const headerEl = document.createElement('h2');
    headerEl.textContent = candy.name;

    li.append(headerEl, pEl);

    return li;
}
