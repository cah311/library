let myLibrary = [];

function Book() {
    this.name = document.getElementById('titleInput').value
    this.author = document.getElementById('authorInput').value
    this.pages = document.getElementById('pagesInput').value
    this.read = document.getElementById('readInput').value
    // this.info = function() {
    //    return name + " by " + author + " , " + pages + " , " + read 
    // }
    readToggle()

    console.log(this.name, this.author, this.pages, readToggle())
    
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


// const book1 = new Book('The Hobbit', "J.R.R. Tolkien", "295 pages", "have read")
// const book2 = new Book('LOTR 1', "J.R.R. Tolkien", "2195 pages", "have read")
// const book3 = new Book('LORT 2', "J.R.R. Tolkien", "2323 pages", "have read")

function addBookToLibary(x) {
    myLibrary.unshift(x)
};

// addBookToLibary(book1)
// addBookToLibary(book2)
// addBookToLibary(book3)

// console.log(myLibrary)

