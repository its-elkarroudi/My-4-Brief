
const addBookForm = document.getElementById("addBookForm");
const checkTitles = (title) => {
    const validTitle = /^[A-Za-z ]+$/;
    if(validTitle.test(title)){
       return true;
    }
    else{
       return false;
    }
}

const checkDescription = (description) => {
   const validDesc = /^[A-Za-z0-9\W]+$/
   if(validDesc.test(description)){
       return true;
   }
   else{
       return false;
   }
}

const checkIsbn = (isbn)=>{
    const isbnValidation =/^[0-9]+$/ ;
    
    if(isbnValidation.test(isbn)){
        return true;
     }
     else{
        return false;
     }
}


const checkPrice = (price)=>{
    const priceValidation =/^[0-9]+$/ ;
     
     if(priceValidation.test(price)){
        return true;
     }
     else{
        return false;
     }
}

const checkQuantity = (quantity)=>{
    const quantityValidation =/^[0-9]+$/ ;
     
    if(quantityValidation.test(quantity)){
        return true;
     }
     else{
        return false;
     }
}

const checkDisponibility = (disponibility)=>{
    const disponibilityValidation =/^[0-9]+$/ ;
     
     if(disponibilityValidation.test(disponibility)){
        return true;
     }
     else{
        return false;
     }
}




const checkCategoryName = (catName,error)=>{
   
    if (catName.trim() === ""){
       error = "title can't be empty";
    }
    else{
       const res = checkTitles(catName);
    }

    return res;
}

addBookForm.addEventListener("submit", (event) =>{

    event.preventDefault();

    const isbn = document.getElementById("bookIsbn");
    const isbnError = document.getElementById("isbnError");
    const bookTitle = document.getElementById("bookTitle");
    const titleError = document.getElementById("titleError");
    const price = document.getElementById("bookPrice");
    const priceError = document.getElementById("priceError");
    const bookQuantity = document.getElementById("bookQuantity");
    const quantityError = document.getElementById("quantityError");
    const bookAuthor = document.getElementById("bookAuthor") ;
    const authorError = document.getElementById("authorError");
    const bookDescription = document.getElementById("bookDescription");
    const descError = document.getElementById("descError");
    const addBookImg = document.getElementById("addBookImg");
    const imgError = document.getElementById("imgError");
  

    if(isbn.value.trim() === ""){
       isbnError.textContent= "isbn should not be empty !";
    }

    else if(checkIsbn(isbn.value)){
        if(isbn.classList.contains("invalid")){
            isbn.classList.remove("invalid");
        }
        isbn.classList.add("valid");
        isbnError.textContent ="";
    }
    else{
        if(isbn.classList.contains("valid")){
            isbn.classList.remove("valid");
        }
        isbn.classList.add("invalid");
        isbnError.textContent ="isbn should be a number";
    }

    if(bookTitle.value.trim() === ""){
        titleError.textContent= "title should not be empty !";
     }
 
     else if(checkTitles(bookTitle.value)){
         if(bookTitle.classList.contains("invalid")){
             bookTitle.classList.remove("invalid");
         }
         bookTitle.classList.add("valid");
         titleError.textContent ="";
     }
     else{
         if(bookTitle.classList.contains("valid")){
             bookTitle.classList.remove("valid");
         }
         bookTitle.classList.add("invalid");
         titleError.textContent ="title only accepts characters";
     }

     if(price.value.trim() === ""){
        priceError.textContent= "price should not be empty !";
     }
 
     else if(checkPrice(price.value)){
         if(price.classList.contains("invalid")){
             price.classList.remove("invalid");
         }
         price.classList.add("valid");
         priceError.textContent ="";
     }
     else{
         if(price.classList.contains("valid")){
             price.classList.remove("valid");
         }
         price.classList.add("invalid");
         priceError.textContent ="price should be a number";
     }

     if(bookQuantity.value.trim() === ""){
        quantityError.textContent= "quantity should not be empty !";
     }
 
     else if(checkQuantity(bookQuantity.value)){
         if(bookQuantity.classList.contains("invalid")){
             bookQuantity.classList.remove("invalid");
         }
         bookQuantity.classList.add("valid");
         quantityError.textContent ="";
     }
     else{
         if(bookQuantity.classList.contains("valid")){
             bookQuantity.classList.remove("valid");
         }
         bookQuantity.classList.add("invalid");
         quantityError.textContent ="quantity should be a number";
     }

     if(bookAuthor.value.trim() === ""){
        authorError.textContent= "author should not be empty !";
     }
 
     else if(checkTitles(bookAuthor.value)){
         if(bookAuthor.classList.contains("invalid")){
             bookAuthor.classList.remove("invalid");
         }
         bookAuthor.classList.add("valid");
         authorError.textContent ="";
     }
     else{
         if(bookAuthor.classList.contains("valid")){
             bookAuthor.classList.remove("valid");
         }
         bookAuthor.classList.add("invalid");
         authorError.textContent ="names cannot contain symboles or numbers";
     }


     if(bookDescription.value.trim() === ""){
        descError.textContent= "description should not be empty !";
     }
 
     else if(checkDescription(bookDescription.value)){
         if(bookDescription.classList.contains("invalid")){
             bookDescription.classList.remove("invalid");
         }
         bookDescription.classList.add("valid");
         descError.textContent ="";
     }
     else{
         if(bookDescription.classList.contains("valid")){
             bookDescription.classList.remove("valid");
         }
         bookDescription.classList.add("invalid");
         descError.textContent ="names cannot contain symboles or numbers";
     }

     
     if(!addBookImg.files[0]){
        imgError.textContent = "pls fill the image";
     }

     const allowedImageFormats = ["image/jpeg" , "image/png" , "image/jpg" , "image/gif"];

     if(!allowedImageFormats.includes(addBookImg.files[0].type)){
        imgError.textContent = "jpg , png , jpeg , gif are the only formats supported";
     }

     else{
        imgError.textContent = "";
     }

})


const editBookForm = document.getElementById("editBookForm");



editBookForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    const isbn = document.getElementById("bookIsbn2");
    const isbnError = document.getElementById("isbnError2");
    const bookTitle = document.getElementById("bookTitle2");
    const titleError = document.getElementById("titleError2");
    const price = document.getElementById("bookPrice2");
    const priceError = document.getElementById("priceError2");
    const bookQuantity = document.getElementById("bookQuantity2");
    const quantityError = document.getElementById("quantityError2");
    const bookAuthor = document.getElementById("bookAuthor2") ;
    const authorError = document.getElementById("authorError2");
    const bookDescription = document.getElementById("bookDescription2");
    const descError = document.getElementById("descError2");
    const addBookImg = document.getElementById("addBookImg2");
    const imgError = document.getElementById("imgError2");
    
  

    if(isbn.value.trim() === ""){
       isbnError.textContent= "isbn should not be empty !";
    }

    else if(checkIsbn(isbn.value)){
        if(isbn.classList.contains("invalid")){
            isbn.classList.remove("invalid");
        }
        isbn.classList.add("valid");
        isbnError.textContent ="";
    }
    else{
        if(isbn.classList.contains("valid")){
            isbn.classList.remove("valid");
        }
        isbn.classList.add("invalid");
        isbnError.textContent ="isbn should be a number";
    }

    if(bookTitle.value.trim() === ""){
        titleError.textContent= "title should not be empty !";
     }
 
     else if(checkTitles(bookTitle.value)){
         if(bookTitle.classList.contains("invalid")){
             bookTitle.classList.remove("invalid");
         }
         bookTitle.classList.add("valid");
         titleError.textContent ="";
     }
     else{
         if(bookTitle.classList.contains("valid")){
             bookTitle.classList.remove("valid");
         }
         bookTitle.classList.add("invalid");
         titleError.textContent ="title only accepts characters";
     }

     if(price.value.trim() === ""){
        priceError.textContent= "price should not be empty !";
     }
 
     else if(checkPrice(price.value)){
         if(price.classList.contains("invalid")){
             price.classList.remove("invalid");
         }
         price.classList.add("valid");
         priceError.textContent ="";
     }
     else{
         if(price.classList.contains("valid")){
             price.classList.remove("valid");
         }
         price.classList.add("invalid");
         priceError.textContent ="price should be a number";
     }

     if(bookQuantity.value.trim() === ""){
        quantityError.textContent= "quantity should not be empty !";
     }
 
     else if(checkQuantity(bookQuantity.value)){
         if(bookQuantity.classList.contains("invalid")){
             bookQuantity.classList.remove("invalid");
         }
         bookQuantity.classList.add("valid");
         quantityError.textContent ="";
     }
     else{
         if(bookQuantity.classList.contains("valid")){
             bookQuantity.classList.remove("valid");
         }
         bookQuantity.classList.add("invalid");
         quantityError.textContent ="quantity should be a number";
     }

     if(bookAuthor.value.trim() === ""){
        authorError.textContent= "author should not be empty !";
     }
 
     else if(checkTitles(bookAuthor.value)){
         if(bookAuthor.classList.contains("invalid")){
             bookAuthor.classList.remove("invalid");
         }
         bookAuthor.classList.add("valid");
         authorError.textContent ="";
     }
     else{
         if(bookAuthor.classList.contains("valid")){
             bookAuthor.classList.remove("valid");
         }
         bookAuthor.classList.add("invalid");
         authorError.textContent ="names cannot contain symboles or numbers";
     }


     if(bookDescription.value.trim() === ""){
        descError.textContent= "description should not be empty !";
     }
 
     else if(checkDescription(bookDescription.value)){
         if(bookDescription.classList.contains("invalid")){
             bookDescription.classList.remove("invalid");
         }
         bookDescription.classList.add("valid");
         descError.textContent ="";
     }
     else{
         if(bookDescription.classList.contains("valid")){
             bookDescription.classList.remove("valid");
         }
         bookDescription.classList.add("invalid");
         descError.textContent ="names cannot contain symboles or numbers";
     }

     if(!addBookImg.files[0]){
        imgError.textContent = "pls fill the image";
     }

     const allowedImageFormats = ["image/jpeg" , "image/png" , "image/jpg" , "image/gif"];

     if(!allowedImageFormats.includes(addBookImg.files[0].type)){
        imgError.textContent = "jpg , png , jpeg , gif are the only formats supported";
     }

     else{
        imgError.textContent = "";
     }

})

 




