


  function fetchBooks(){
    fetch('https://anapioficeandfire.com/api/books')
    .then(res => res.json())
    .then(renderBooks)
  }




  function renderBooks(books){
    const bodyDiv = document.querySelector('body')
    console.log(books)
    books.forEach(book => {
      let newBookH2 = document.createElement('h2')
      newBookH2.innerText = book.name
      bodyDiv.append(newBookH2)
      console.log(book.name)
    })
  }

  document.addEventListener('DOMContentLoaded', function() {
})
