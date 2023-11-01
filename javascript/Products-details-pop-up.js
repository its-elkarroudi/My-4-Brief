const title_onclick = document.querySelectorAll('.product_title_onclick');
const image_onclick = document.querySelectorAll('.product_image_onclick');
const product_information_section = document.getElementById('product-information');
const product_information_section_close = document.querySelector('.product_information_close');


for (let i = 0; i < title_onclick.length; i++) {
    title_onclick[i].addEventListener('click', () => {
        product_information_section.classList.add('show-product');
        })
}

for (let a = 0; a < image_onclick.length; a++) {
    image_onclick[a].addEventListener('click', () => {
        product_information_section.classList.add('show-product');
        })
    
}
product_information_section_close.addEventListener('click', () => {
    product_information_section.classList.remove('show-product');
    })