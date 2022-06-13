let myLibrary = [];

const librarySection = document.querySelector('#libraryContainer')

function Book() {
    this.name = document.getElementById('titleInput').value
    this.author = document.getElementById('authorInput').value
    this.pages = document.getElementById('pagesInput').value
    this.read = readToggle()

    return (this.name, this.author, this.pages, this.read)
    
}

function readToggle() {
    let readToggle = document.querySelector('#readInput')
    let status;
    if (readToggle.checked) {
        status = 'read'
        return status
    } else {
        status = 'not read'
        return status
        
    }
    
}

function addBookToLibrary() {
    
    let x = myLibrary.length

    let newBookArray = new Book()   //pulls from Book constructor
    let newBook = Object.values(newBookArray)   //makes object into text values  
    myLibrary.unshift(newBook)    //adds new boopk from constructor to from of library array

    let libraryStart = document.getElementById('libraryStart')

    
    let bookStackTop = document.createElement('div');
    bookStackTop.classList.add('bookBinding')
    bookStackTop.setAttribute('id', `book${x}`)

    let bookTitle = document.createElement('div')
    bookTitle.classList.add('bookTitle')
    bookTitle.textContent = (`${newBookArray.name}`)

    let bookAuthor = document.createElement('div')
    bookAuthor.classList.add('bookAuthor')
    bookAuthor.textContent = (`By ${newBookArray.author}`)


    // bookStackTop.textContent = myLibrary[0]
    // bookStackTop.textContent = (`${newBookArray.name}`)


    librarySection.insertBefore(bookStackTop, libraryStart)
    bookStackTop.appendChild(bookTitle)
    bookStackTop.appendChild(bookAuthor)
    librarySection.insertBefore( libraryStart, bookStackTop)
    

    console.log(bookStackTop.id)
    console.log(newBook)
    console.log(myLibrary)
};

