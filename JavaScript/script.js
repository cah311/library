let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages 
    this.read = read 
    this.info = function() {
       return name + " by " + author + " , " + pages + " , " + read 
    }
}

function addBookToLibary() {
    // do stuff here
}

const book1 = new Book('The Hobbit', "J.R.R. Tolkien", "295 pages", "have read")
console.log(book1.info())

