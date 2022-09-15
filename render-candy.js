export function renderCandy(candy) {
    const li = document.createElement('li');
    const pEl = document.createElement('p');
    const headerEl = document.createElement('h2');
    headerEl.textContent = candy.name;
    return li;
}
