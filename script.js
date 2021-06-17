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
    var fo = document.querySelector(".hidden-form");
    if(fo.style.display === "none"){
        hiddenform.setAttribute("style", "display:flex");
    }
    else{
        hiddenform.setAttribute("style", "display:none");
    }
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function createBook(){
    addBookToLibrary(newBook());
    libraryFeed(myLibrary.slice(-1));
    
}

function newBook(){
    author=document.getElementById("book-author").value;
    title=document.getElementById("book-title").value;

    return new Book(author, title);
}


function removeBook(e){
     bookTitle = e.target.parentNode.firstChild.innerHtml;
    myLibrary=myLibrary.filter((Book)=> book.title !== bookTitle);
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);

    //need to get book title when called

    libraryFeed(myLibrary);
}

function editBook(e){
    /*
    var title = document.getElementById("input-title");
    var author = document.getElementById("input-author");
    */
    var title = prompt("new title", "harry Potter");
    var author = prompt("new Author", "Not Jk");
    e.target.parentNode.firstChild.textContent=title;
    e.target.parentNode.children[1].textContent=author;
}

function newBookElement(book){

    this.element = document.createElement("div");
    this.element.classList.add('container');
    this.element.id= "book";
    rowOne.appendChild(this.element);


    this.h1 = document.createElement("h1");
    this.h1.textContent=book.title;
    this.p = document.createElement("p");
    this.p.textContent=book.author;

    // hidden input
    /*

        very hidden input now

    this.inputTitle =document.createElement("input");
    this.inputTitle.id = "input-title";
    this.inputAuthor =document.createElement("input");
    this.inputAuthor.id = "input-author";
    this.inputTitle.setAttribute("style", 'display:none;');
    this.inputAuthor.setAttribute("style", 'display:none;');
    this.inputTitle.setAttribute("placeholder", "title");
    this.inputAuthor.setAttribute("placeholder", "author");
    this.buttonInput=document.createElement("button");
    this.buttonInput.setAttribute("style", "display:none;");
    this.buttonInput.classList.add("btn-primary");
    this.buttonInput.onClick = editBook;
    */

    //  Edit button, started with delete button
    //  so I'm gonna attempt to do the same thing

    this.button1 = document.createElement("button");
    this.button1.textContent = "edit ";
    this.button1.id="edit";
    // new
    this.button1.setAttribute("onclick", 'editBook();');
    this.button1.onclick = editBook;
    /*
    this.button1.addEventListener("click", function() {
        this.inputTitle.setAttribute("style", 'display:flex;');
        this.inputAuthor.setAttribute("style", 'display:flex;');
        this.buttonInput=document.setAttribute("style", "display:none;");

      });

    */
    /*
        Delete button was a pain in my rear end, but
        i learned a lot through the process. The eventual
        solve was by adding an onclick event to each button
        as they're constructed, and then you use the onclick
        event as a pointer to then reference it's parent node's 
        parents node to delete it from the page. 


    */
    this.button = document.createElement("button");
    this.button.textContent = "delete";
    this.button.classList.add('btn-primary');
    this.button.id="delete";
    this.button.setAttribute("onclick", 'removeBook();');
    this.button.onclick = removeBook;

    this.button1.classList.add('btn-primary');
    this.button.setAttribute('type', 'button');
    this.element.appendChild(this.h1);
    this.element.appendChild(this.p);
    this.element.appendChild(this.button1);
    this.element.appendChild(this.button);
      /*
    this.element.appendChild(this.inputTitle);
    this.element.appendChild(this.inputAuthor);
    this.element.appendChild(this.buttonInput);
    */

   // document.getElementById("delete").addEventListener("click", removeBook);

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