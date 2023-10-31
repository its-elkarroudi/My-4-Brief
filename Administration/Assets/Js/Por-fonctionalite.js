/* OPEN AND CLOSE ADD NEW PRODUCT SECTION ============================= */ 
const add_New_Product_btn = document.getElementById('add_New_Product_btn');
const add_New_Product_Btn_close = document.getElementById('add_New_Product_Btn_close')
const add_New_Product = document.getElementById('add_New_Product');

add_New_Product_btn.addEventListener('click', () => {
    add_New_Product.classList.add('show');
    });

add_New_Product_Btn_close.addEventListener('click', () => {
    add_New_Product.classList.remove('show');
    });


/* OPEN AND CLOSE EDIT Product SECTION ============================= */

const modify_product_btn = document.querySelectorAll('.modify_Category_btn');
const modify_product_Btn_close = document.querySelector('.edit_Product_btn_close');
const edit_Product = document.getElementById('edit_Product');


modify_product_btn.forEach(button => {
    button.addEventListener('click', () => {
        edit_Product.classList.add('show');
    });
});


modify_product_Btn_close.addEventListener('click', () => {
    edit_Product.classList.remove('show');
});




