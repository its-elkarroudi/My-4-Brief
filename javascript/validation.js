////Category Validation

const addCategoryForm = document.getElementById("New-category-form");
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

addCategoryForm.addEventListener("submit", (event) =>{
    const categoryName = document.getElementById("category-name").value;
    const categoryDesc = document.getElementById("category-desc").value;
    const categoryInput = document.getElementById("category-name");
    const descInput = document.getElementById("category-desc");
    const errorMsg = document.getElementById("errorMessage");

    if(categoryName.trim() === "" || categoryDesc.trim() === ""){
        errorMsg.textContent = "Pls Fill All Informations";
        descInput.classList.add("invalid");
    }

    else{
        errorMsg.textContent = "";
    }

    const nameValidation = checkTitles(categoryName);
    
    if(!nameValidation){
        
        if(categoryInput.classList.contains("valid")){
            categoryInput.classList.remove("valid");
        }
        categoryInput.classList.add("invalid");
    }
    else{
        if(categoryInput.classList.contains("invalid")){
            categoryInput.classList.remove("invalid");
        }
        categoryInput.classList.add("valid");
    }

    const descValidation = checkDescription(categoryDesc);

    if(!descValidation){
        
        if(descInput.classList.contains("valid")){
            descInput.classList.remove("valid");
        }
        descInput.classList.add("invalid");
    }
    else{
        if(descInput.classList.contains("invalid")){
             descInput.classList.remove("invalid");
        }
        descInput.classList.add("valid");
    }
    event.preventDefault();
})

const modifyCatForm = document.getElementById("modify_Category");

modifyCatForm.addEventListener("submit", (event) =>{
    const categoryName = document.getElementById("modifyCatName").value;
    const categoryDesc = document.getElementById("modifyCatDesc").value;
    const categoryInput = document.getElementById("modifyCatName");
    const descInput = document.getElementById("modifyCatDesc");
    const errorMsg = document.getElementById("errorMessage");

    if(categoryName.trim() === "" || categoryDesc.trim() === ""){
        errorMsg.textContent = "Pls Fill All Informations";
        descInput.classList.add("invalid");
    }

    else{
        errorMsg.textContent = "";
        
    }

    const nameValidation = checkTitles(categoryName);
    
    if(!nameValidation){
        
        if(categoryInput.classList.contains("valid")){
            categoryInput.classList.remove("valid");
        }
        categoryInput.classList.add("invalid");
    }
    else{
        if(categoryInput.classList.contains("invalid")){
            categoryInput.classList.remove("invalid");
        }
        categoryInput.classList.add("valid");
    }

    const descValidation = checkDescription(categoryDesc);

    if(!descValidation){
        
        if(descInput.classList.contains("valid")){
            descInput.classList.remove("valid");
        }
        descInput.classList.add("invalid");
    }
    else{
        if(descInput.classList.contains("invalid")){
             descInput.classList.remove("invalid");
        }
        descInput.classList.add("valid");
    }
    event.preventDefault();
})

//// Book Validation : 
