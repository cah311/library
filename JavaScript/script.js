let myLibrary = [];
// let name = document.querySelector('titleInput')
// let author = document.querySelector('authorInput')
// let pages = document.querySelector('pagesInput')
// let read = document.querySelector('pagesInput')



function Book() {
    this.name = document.getElementById('titleInput').value
    this.author = document.getElementById('authorInput').value
    this.pages = document.getElementById('pagesInput').value
    this.read = document.getElementById('readInput').value
    // this.info = function() {
    //    return name + " by " + author + " , " + pages + " , " + read 
    // }
    console.log(this.name, this.author, this.pages)
    
}

// function post() {
//     let a = document.getElementById('titleInput').value;
//     let b = document.querySelector('#authorInput')
//     let c = document.querySelector('#pagesInput')
//     let d = document.querySelector('#pagesInput')
//     console.log(a)
// }



// const book1 = new Book('The Hobbit', "J.R.R. Tolkien", "295 pages", "have read")
// const book2 = new Book('LOTR 1', "J.R.R. Tolkien", "2195 pages", "have read")
// const book3 = new Book('LORT 2', "J.R.R. Tolkien", "2323 pages", "have read")

// function addBookToLibary(x) {
//     myLibrary.unshift(x)
// };

// addBookToLibary(book1)
// addBookToLibary(book2)
// addBookToLibary(book3)

// console.log(myLibrary)

