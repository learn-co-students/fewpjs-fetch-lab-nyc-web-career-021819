// The 5th book in the series
// The 1031st character in the series
// The total number of pages of all the books
// It's not uncommon for developers who are integrating with third-party APIs to have to do some exploration of the 
// returned data to find the thing they're looking for.

// Deliverables
// In index.js, there is an empty function, fetchBooks(), that is called when index.html is loaded. 
// To pass this lab, this function should include a fetch request to the Game of Thrones API 
// ('https://anapioficeandfire.com/api/books'). The returned response should be converted to JSON. Call the second function, 
// renderBooks(), passing in the API's returned JSON data as the argument.




function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books').then(respfrombooks => respfrombooks.json()).then(respfrombooksjson => renderBooks(respfrombooksjson))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
