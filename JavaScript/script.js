let myLibrary = [];

const librarySection = document.querySelector("#libraryContainer");

//book constructor
class Book {
  constructor() {
    this.name = document.getElementById("titleInput").value;
    this.author = document.getElementById("authorInput").value;
    this.pages = document.getElementById("pagesInput").value;
    this.read = readToggle();
  }

  //return this.name, this.author, this.pages, this.read;
}

//function to give status of read toggle
function readToggle() {
  let readToggle = document.querySelector("#readInput");
  let status;
  if (readToggle.checked) {
    status = "Have read";
    return status;
  } else {
    status = "Have not read";
    return status;
  }
}

function addBookToLibrary() {
  let x = myLibrary.length;

  let newBookArray = new Book(); //pulls from Book constructor
  let newBook = Object.values(newBookArray); //makes object into text values
  myLibrary.unshift(newBook); //adds new boopk from constructor to from of library array

  let libraryStart = document.getElementById("libraryStart"); //gives new book a target to move ontop of

  //container for new book addition
  let bookStackTop = document.createElement("div");
  bookStackTop.classList.add("bookBinding");
  bookStackTop.setAttribute("id", `book${x}`);

  //book title div
  let bookTitle = document.createElement("div");
  bookTitle.classList.add("bookTitle");
  bookTitle.textContent = `${newBookArray.name}`;

  //book author div
  let bookAuthor = document.createElement("div");
  bookAuthor.classList.add("bookAuthor");
  bookAuthor.textContent = `By ${newBookArray.author}`;

  //book pages div
  let bookPages = document.createElement("div");
  bookPages.classList.add("bookPages");
  bookPages.textContent = ` ${newBookArray.pages}`;

  //book read status
  let bookRead = document.createElement("div");
  bookRead.classList.add("bookRead");
  bookRead.textContent = ` ${newBookArray.read}`;

  librarySection.insertBefore(bookStackTop, libraryStart); //inserts new book at the top of the order
  bookStackTop.appendChild(bookTitle); //adds title
  bookStackTop.appendChild(bookAuthor); //adds author
  bookStackTop.appendChild(bookPages); //adds pages
  bookStackTop.appendChild(bookRead); //adds read status
  librarySection.insertBefore(libraryStart, bookStackTop); //inserts black div back at the top for new book addition to be able to target

  console.log(bookStackTop.id);
  console.log(newBook);
  console.log(myLibrary);
}
