

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


function restoreContent(parent,key) {
    const content = JSON.parse(localStorage.getItem(key)) || [];
    content.forEach((element) => {
        const newDiv = document.createElement("div");
        parent.appendChild(newDiv);
        newDiv.outerHTML = element;
    });
}



const newCategoryForm = document.getElementById("addCategoryForm");


newCategoryForm.addEventListener("submit", (event) => {
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

const modifyCatForm = document.getElementById("modifyCategory");

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




const modifyCategoryForm = document.getElementById("modifyCategory");

modifyCategoryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const Title = document.getElementById("modifyCatName");
    const desc = document.getElementById("modifyCatDesc"); 
    
    modifyCategory(Title.value,desc.value);
   
})



const categoryItems = document.getElementById("category-items");


newCategoryForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const categoryName = document.getElementById("category-name");
    const categoryDesc = document.getElementById("category-desc");
    const validationMsg = document.getElementById("validation");

   if(addCategory(categoryName.value,categoryDesc.value)){
        validationMsg.textContent="category added successfully";
        const newCat = document.createElement("div");
        newCat.innerHTML = `
                    <img src="../Img/Categories/Cat-beck.png" alt="category image">
                    <div class="info">
                        <h1>${categoryName.value}</h1>
                        <div>
                            <button class="sp-btn delete">Delete</button>
                            <button class="modify_Category_btn sp-btn ">Modify</button>
                        </div>
                    </div>  `;
        newCat.classList.add("category");
        categoryItems.appendChild(newCat);
        saveContent(categoryItems,"category_List");
    }
    else{
        validationMsg.textContent="category Name already exists !";
    }
});

window.addEventListener("load",restoreContent(categoryItems,"category_List"));