let myLibrary = [];
const librarySection = document.querySelector('#libraryContainer')

function Book() {
    this.name = document.getElementById('titleInput').value
    this.author = document.getElementById('authorInput').value
    this.pages = document.getElementById('pagesInput').value
    this.read = readToggle()
    readToggle()
    return (this.name, this.author, this.pages, readToggle())
    
}

function readToggle() {
    let readToggle = document.querySelector('#readInput')
    let status;
    if (readToggle.checked) {
        status = 'read'
        return status
        console.log(status)
    } else {
        status = 'not read'
        return status
        console.log(status)
    }
    
}

function addBookToLibrary() {
    let newBookArray = new Book()
    let newBook = Object.values(newBookArray)
    myLibrary.unshift(newBook)



    const library = document.createElement('div');
    library.classList.add('books')
    library.textContent = myLibrary[0]

    librarySection.appendChild(library)
    
    console.log(newBook)
    console.log(myLibrary)
};

