/*
    Working on another javascript project, this will
    be about books
*/

let myLibrary = [];
var rowOne = document.getElementById("row-one");
var hiddenform= document.querySelector(".hidden-form");

function Book(author, title) {
    this.author=author;
    this.title=title;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function printLibrary(){
    for(i=0;i<myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}
function showForm(){
    hiddenform.setAttribute("style", "display:flex");
}
function createBook(){
    var author=document.getElementById("book-author").value;
    var title=document.getElementById("book-title").value;

    this.Book = new Book(author, title);
    addBookToLibrary(this.Book);
    libraryFeed(myLibrary);
    
    
}

const bio = new Book("john","2 kids and a regret");
addBookToLibrary(bio);
printLibrary();

function newBookElement(book){

    this.element = document.createElement("div");
    this.element.classList.add('container');
    this.element.id= "book";
    rowOne.appendChild(this.element);


    this.h1 = document.createElement("h1");
    this.h1.textContent=book.title;
    this.p = document.createElement("p");
    this.p.textContent=book.author;
    this.button1 = document.createElement("button");
    this.button1.textContent = "edit ";
    this.button = document.createElement("button");
    this.button.textContent = "delete";
    this.button.classList.add('btn-primary');
    this.button1.classList.add('btn-primary')
    this.button.setAttribute('type', 'button');
    this.element.appendChild(this.h1);
    this.element.appendChild(this.p);
    this.element.appendChild(this.button1);
    this.element.appendChild(this.button);
}

function libraryFeed(myLibrary){
    for(i=0;i<myLibrary.length; i++){
        this.book = new newBookElement(myLibrary[i]);
    }
}

libraryFeed(myLibrary);


/*

    Practice space for me to try out some OOP things
    

*/
/*

function player(name, age) {
    this.name=name,
    this.age =age
}

const player1 = new player('john', '31');
console.log(player1);

function book(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
}

const theHobbit= new book('The Hobbit', "JRR Tolkein", "32412874982138");
console.log(theHobbit.title);

function getTitle(name){
    return name.title;
}
function getAuthor(name){
    return name.author;
}
function getIsbn(name){
    return name.isbn;
}

console.log(getTitle(theHobbit));
console.log(getAuthor(theHobbit));
console.log(getIsbn(theHobbit));

function setTitle(name, value){
    name.title=value;
    return true;
}
function setAuthor(name, value){
    name.author=value;
    return true;
}
function setIsbn(name, value){
    name.isbn=value;
    return true;
}

console.log(setTitle(theHobbit, "da snobbit"));
console.log(setAuthor(theHobbit, "me, bitch"));
console.log(setIsbn(theHobbit, "66666666666666"));

console.log(getTitle(theHobbit));
console.log(getAuthor(theHobbit));
console.log(getIsbn(theHobbit));

*/