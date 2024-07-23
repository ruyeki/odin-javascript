document.addEventListener("DOMContentLoaded", () => {
    let dialog = document.getElementById("popup");
    let container = document.getElementById("container");
    let addButton = document.getElementById("addbookbtn");
    let confirmBtn = document.querySelector("#confirmbtn");
    let cancelBtn = document.querySelector("#cancelbtn");
    const textAnswers = popup.querySelector("#title-answer");
    const authorAnswers = popup.querySelector("#author-answer");
    const pagesAnswers = popup.querySelector("#pages-answer");

    const myLibrary = [];

    let read = false;

    class Book {
        constructor(name, author, pages){
            this.name = name;
            this.author = author;
            this.pages = pages;
        }

        info(){
            return `${this.name}, ${this.author}, ${this.pages}`;
        }
    }


    function displayLibrary(){

        const libraryContainer = document.getElementById("book-container");
        libraryContainer.innerHTML = '';

        myLibrary.forEach((book, index)=>{

            const card = document.createElement("div");
            const readStatus = document.createElement("p");
            const deleteBtn = document.createElement("button");
            const readBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            readBtn.textContent = "Toggle Read";
            card.textContent = `${book.info()}`;
            card.appendChild(deleteBtn);
            card.appendChild(readBtn);
            card.appendChild(readStatus);
            libraryContainer.append(card);

            deleteBtn.addEventListener("click", function(){        
                card.remove();
                myLibrary.splice(index, 1);
            });

            readBtn.addEventListener("click", function(){
                if(read == false){
                    readStatus.textContent = "Read";
                    read = true;
                }else if(read == true){

                    readStatus.textContent = "Not Read";
                    read = false;

                }

            });



        });


    }


    function addBookToLibrary() {

        addButton.addEventListener("click", function(){

            dialog.showModal();

        });

        confirmBtn.addEventListener("click", (event)=>{
            event.preventDefault();
            popup.close(textAnswers.value, authorAnswers.value, pagesAnswers.value);
            const newBook = new Book(textAnswers.value, authorAnswers.value, pagesAnswers.value);
            myLibrary.push(newBook);
            displayLibrary();
        });

        cancelBtn.addEventListener("click", function(){
            popup.close();
        });


    }

    addBookToLibrary();






});