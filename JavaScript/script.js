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
    bookStackTop.setAttribute('id', `book${x}`)
    bookStackTop.textContent = myLibrary[0]


    librarySection.insertBefore(bookStackTop, libraryStart)
    librarySection.insertBefore( libraryStart, bookStackTop)
    
    // librarySection.appendChild(bookStackTop)
    
    

    console.log(bookStackTop.id)
    console.log(newBook)
    console.log(myLibrary)
};

