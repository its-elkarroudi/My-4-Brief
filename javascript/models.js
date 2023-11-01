class Book {
    constructor(bookId,ISBN,bookTitle,bookDesc,price,quantity,disponibility,authorName,categoryName){
        this.bookId = bookId;
        this.Isbn = ISBN;
        this.bookTitle = bookTitle;
        this.bookDesc = bookDesc;
        this.price = price;
        this.quantity = quantity;
        this.disponibility = disponibility;
        this.authorName = authorName;
        this.categoryName = categoryName;
    }
}


class Category {
   
    constructor(categoryId,categoryTitle,CategoryDesc){
        this.categoryId = categoryId;
        this.categoryTitle = categoryTitle;
        this.CategoryDesc = CategoryDesc;
    }

}

class Author {
    constructor(authorId,authorName,speciality){
        this.authorId = authorId;
        this.authorName = authorName;
        this.speciality = speciality;
    }
}

let books = [];
let categorys = [];
let authors = [];

const bringData = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}

const saveData = (key,data) => {
    localStorage.setItem(key,JSON.stringify(data));
}





const addBook =(ISBN,bookTitle,bookDesc,price,quantity,disponibility,authorName,categoryName) =>{
    const id = new Date().getTime().toString();
    books= bringData("books") || [];
    const checkUnique = () => {
        for (let i = 0; i < books.length; i++) {
            if (books[i].Isbn === ISBN || books[i].bookTitle === bookTitle) {
                return false;
            }
        }
        return true; 
    }
    if(checkUnique()){
        const newBook = new Book(id,ISBN,bookTitle,bookDesc,price,quantity,disponibility,authorName,categoryName);
        books.push(newBook);
        saveData("books", books);
        return true;
    }
    else {
        return false;
    }
      
}
addBook(1253,"power","no idea",1510,10,true,"mathilda","Drama");



const addCategory = (categoryTitle,categoryDesc) =>{
    const id = new Date().getTime().toString();
    categorys = bringData("categorys") || [];
    console.log(categorys);
    const checkUnique = () =>{
        for(i = 0; i<categorys.length ; i++ ){
            if(categorys[i].categoryTitle == categoryTitle){
                return false;
            }
            return true;
        }
    }
    if(checkUnique()){
        const newCategory = new Category(id,categoryTitle,categoryDesc);
        categorys.push(newCategory);
        saveData("categorys",categorys);
        return true;
    }
    else{
        return false;
    }   

}



const addAuhtor = (authorName,speciality) =>{
    const id = new Date().getTime().toString();
    const newAuthor = new Author(id,authorName,speciality);
    authors.push(newAuthor);
    saveData("authors",authors);
}


const modifyBook = (ISBN,bookTitle,bookDesc,price,quantity,disponibility,authorName,categoryName) =>{
    books= bringData("books");
    
    for (i=0; i < books.length; i++ ){
        if(books[i].bookTitle == bookTitle){
            books[i].Isbn= ISBN;
            books[i].bookDesc = bookDesc;
            books[i].price = price ;
            books[i].quantity = quantity;
            books[i].disponibility = disponibility;
            books[i].authorName = authorName;
            books[i].categoryName = categoryName;
        }
    }
    
    saveData("books",books);
}

const modifyCategory = (categoryTitle,categoryDesc) =>{
   categorys = bringData("categorys");

   for (i = 0 ; i < categorys.length ; i++){
    if(categorys[i].categoryTitle == categoryTitle ){
        categorys[i].CategoryDesc = categoryDesc;
    }
   }
   saveData("categorys",categorys);
}

const saveContent = (parent,key) => {
    const content = Array.from(parent.children).map((content) => content.outerHTML);
    localStorage.setItem(key, JSON.stringify(content));
}

function restoreContent(parent,key) {
    const content = JSON.parse(localStorage.getItem(key)) || [];
    content.forEach((element) => {
        const newDiv = document.createElement("div");
        parent.appendChild(newDiv);
        newDiv.outerHTML = element;
    });
}


const newBookForm = document.querySelector(".addBookForm");
const productSection = document.getElementById("products-container");



newBookForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const isbn = document.getElementById("bookIsbn");
    const title = document.getElementById("bookTitle");
    const desc = document.getElementById("bookDescription");
    const price = document.getElementById("bookPrice");
    const quantity = document.getElementById("bookQuantity");
    const author = document.getElementById("bookAuthor");
    const validationMsg = document.getElementById("validation");
    const disponibility = false;
    const category = 'motivation';
    
    if(addBook(isbn.value,title.value,desc.value,price.value,quantity.value,disponibility,author.value,category)){
        validationMsg.textContent = "book added successfully";
        const newBook = document.createElement("div");
        newBook.innerHTML = `  
                <h3>${isbn.value}</h3>
                <h3>${title.value}</h3>
                <h3>${price.value}</h3>
                <h3>${quantity.value}</h3>
                <h3>
                    <button class="sp-btn delete">Delete</button>
                    <button class="sp-btn modify_Category_btn">Modify</button>
                </h3> `
        newBook.classList.add("product");
        productSection.appendChild(newBook);
        saveContent(productSection,"books_List");
    }    
    else{
        validationMsg.textContent = "ISBN OR TITLE ALREADY EXIST !";
    }
});

const editBookBtn = document.getElementById("editBookBtn");

editBookBtn.addEventListener("click", () =>{
    const isbn = document.getElementById("bookIsbn2");
    const title = document.getElementById("bookTitle2");
    const desc = document.getElementById("bookDescription2");
    const price = document.getElementById("bookPrice2");
    const quantity = document.getElementById("bookQuantity2");
    const author = document.getElementById("bookAuthor2");
    const validationMsg = document.getElementById("validation2");
    const disponibility = false;
    const category = 'motivation';

    modifyBook(isbn.value,title.value,desc.value,price.value,quantity.value,disponibility,author.value,category);
    validationMsg.textContent = "book modified successfully";
});







window.addEventListener("load",restoreContent(productSection,"books_List"));





























