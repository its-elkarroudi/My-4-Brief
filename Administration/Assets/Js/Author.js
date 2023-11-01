/* OPEN AND CLOSE ADD NEW AUTHOR SECTION ============================= */ 
const add_New_Author_Btn = document.getElementById('add_New_Author_btn');
const add_New_Author_Btn_close = document.getElementById('add_New_Author_Btn_close');
const add_New_Author_Section = document.getElementById('add_New_Author');


add_New_Author_Btn.addEventListener('click', () => {
    add_New_Author_Section.classList.add('show');
});

add_New_Author_Btn_close.addEventListener('click', () => {
    add_New_Author_Section.classList.remove('show');
});



/* OPEN AND CLOSE EDIT AUTHOR SECTION ============================= */
const modify_Author_btn = document.querySelectorAll('.modify_Author_btn');
const modify_Author_Btn_close = document.querySelector('#modify_Author_Btn_close');
console.log(modify_Author_Btn_close)
const modify_Author = document.getElementById('modify_Author');

for (let i = 0; i < modify_Author_btn.length; i++) {
    modify_Author_btn[i].addEventListener('click', () => {
        modify_Author.classList.add('show');
        });
}


modify_Author_Btn_close.addEventListener('click', () => {
    modify_Author.classList.remove('show');
    });


// VALIDATION OF FORMS 
const New_Author_Form = document.getElementById('New-Author-form');
const modify_author_form = document.getElementById('modify_Author');

const new_Author_name = document.querySelectorAll('input[name="Author-name"]');
console.log(new_Author_name)

const new_Author_Speciality = document.querySelectorAll('input[name="Auhtor-speciality"]');
console.log(new_Author_Speciality)

const new_Author_errorMessage = document.querySelectorAll('.errorMessage');

let is_new_author_valid = false;

const validate_new_author = () => {
    is_new_author_valid = false;

    if (!new_Author_name[0].value) {
        new_Author_name[0].classList.add('invalid');
        new_Author_errorMessage[0].innerText = 'name should not be empty';
        is_new_author_valid = false;
    }
    else if (new_Author_name[0].value.length < 5) {
        new_Author_name[0].classList.add('invalid');
        new_Author_errorMessage[0].innerText = 'write 5 char au min';
        is_new_author_valid = false;
    }
    else {
        new_Author_name[0].classList.remove('invalid');
        new_Author_name[0].classList.add('valid');
        new_Author_errorMessage[0].innerText = "";
        is_new_author_valid = true;
    }

    if (!new_Author_Speciality[0].value) {
        new_Author_Speciality[0].classList.add('invalid');
        new_Author_errorMessage[1].innerText = 'speciality should not be empty';
        is_new_author_valid = false;
    }
    else if (new_Author_Speciality[0].value.length < 5 ){
        new_Author_Speciality[0].classList.add('invalid');
        new_Author_errorMessage[1].innerText = "";
        is_new_author_valid = false;
    }
    else {
        new_Author_Speciality[0].classList.remove('invalid');
        new_Author_Speciality[0].classList.add('valid');
        new_Author_errorMessage[1].innerText = '';
        is_new_author_valid = true;
    }
}

new_Author_name[0].addEventListener('input', () => {
    validate_new_author();
})
new_Author_Speciality[0].addEventListener('input', () => {
    validate_new_author();
})

New_Author_Form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate_new_author();
})











const validate_modify_author = () => {
    is_new_author_valid = false;

    if (!new_Author_name[1].value) {
        new_Author_name[1].classList.add('invalid');
        new_Author_errorMessage[2].innerText = 'name should not be empty';
        is_new_author_valid = false;
    }
    else if (new_Author_name[1].value.length < 5) {
        new_Author_name[1].classList.add('invalid');
        new_Author_errorMessage[2].innerText = 'write 5 char au min';
        is_new_author_valid = false;
    }
    else {
        new_Author_name[1].classList.remove('invalid');
        new_Author_name[1].classList.add('valid');
        new_Author_errorMessage[2].innerText = "";
        is_new_author_valid = true;
    }

    if (!new_Author_Speciality[1].value) {
        new_Author_Speciality[1].classList.add('invalid');
        new_Author_errorMessage[3].innerText = 'speciality should not be empty';
        is_new_author_valid = false;
    }
    else if (new_Author_Speciality[1].value.length < 5 ){
        new_Author_Speciality[1].classList.add('invalid');
        new_Author_errorMessage[3].innerText = "";
        is_new_author_valid = false;
    }
    else {
        new_Author_Speciality[1].classList.remove('invalid');
        new_Author_Speciality[1].classList.add('valid');
        new_Author_errorMessage[3].innerText = '';
        is_new_author_valid = true;
    }
}



new_Author_name[1].addEventListener('input', () => {
    validate_modify_author();
})
new_Author_Speciality[1].addEventListener('input', () => {
    validate_modify_author();
})
modify_Author.addEventListener('submit', (z) => {
    z.preventDefault();
    validate_modify_author();
})

