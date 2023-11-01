const emailPatern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const namePatern = /^[a-zA-Z]{5,20}$/;
const textPatern = /^[a-zA-Z ]{20,100}$/;
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const topic = document.getElementById('topic');
const email = document.getElementById('email');
const form = document.getElementById('contact-form');
const parag = document.getElementById('parag');
const texErea = document.getElementById('Message-box');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailPatern.test(email.value)) {
        if (email.classList.contains("valid")) {
            email.classList.remove("valid");
            email.classList.add('invalid');
        }
    }
    // else if (emailPatern.test(email.value)) {
    // }
    else {
        email.classList.add('valid');
        email.classList.remove('invalid');
    }

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!namePatern.test(fName.value)) {
        if (fName.classList.contains("valid")) {
            fName.classList.remove("valid");
            fName.classList.add('invalid');
        }
    }
    else {
        fName.classList.remove('invalid');
        fName.classList.add('valid');
    }

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!namePatern.test(lName.value)) {
        if (lName.classList.contains("valid")) {
            lName.classList.remove("valid");
            lName.classList.add('invalid');
        }
    }
    else {
        lName.classList.remove('invalid');
        lName.classList.add('valid');
    }

})
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!namePatern.test(topic.value)) {
        if (topic.classList.contains("valid")) {
            topic.classList.remove("valid");
            topic.classList.add('invalid');
        }
    }
    else {
        topic.classList.remove('invalid');
        topic.classList.add('valid');
    }

})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!textPatern.test(texErea.value)) {
        if (texErea.classList.contains("valid")) {
            texErea.classList.remove("valid");
            texErea.classList.add('invalid');
        }
    }
    else {
        texErea.classList.remove('invalid');
        texErea.classList.add('valid');
    }

})
