/* OPEN AND CLOSE ADD NEW CATEGORY SECTION ============================= */ 
const add_New_Category_Btn = document.getElementById('add_New_Category_Btn');
const add_New_Category_Btn_close = document.getElementById('add_New_Category_Btn_close');
const add_New_Category_Section = document.getElementById('add_New_Category');

add_New_Category_Btn.addEventListener('click', () => {
    add_New_Category_Section.classList.add('show');
});

add_New_Category_Btn_close.addEventListener('click', () => {
    add_New_Category_Section.classList.remove('show');
});


/* OPEN AND CLOSE EDIT CATEGORY SECTION ============================= */
const modify_Category_btn = document.querySelectorAll('.modify_Category_btn');
const modify_Category_Btn_close = document.querySelectorAll('.modify_Category_Btn_close');
const modify_Category = document.getElementById('modify_Category');

for (let i = 0; i < modify_Category_btn.length; i++) {

    modify_Category_btn[i].addEventListener('click', () => {
        modify_Category.classList.add('show');
        });
}

for (let w = 0; w < modify_Category_Btn_close.length; w++) {
    modify_Category_Btn_close[w].addEventListener('click', () => {
        modify_Category.classList.remove('show');
        });
}

