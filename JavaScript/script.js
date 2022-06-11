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

const book1 = new Book('The Hobbit', "J.R.R. Tolkien", "295 pages", "have read")
const book2 = new Book('LOTR 1', "J.R.R. Tolkien", "2195 pages", "have read")
const book3 = new Book('LORT 2', "J.R.R. Tolkien", "2323 pages", "have read")

function addBookToLibary(x) {
    myLibrary.unshift(x)
};

addBookToLibary(book1)
addBookToLibary(book2)
addBookToLibary(book3)

console.log(myLibrary)

