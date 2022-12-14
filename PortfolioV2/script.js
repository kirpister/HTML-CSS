const header = document.querySelector('header');
const mobButton = document.querySelector('#mob-btn');
const nav = document.querySelector('nav');
const backButton = document.querySelector('#to-top');
const links = document.querySelectorAll('nav ul li a');
const toTop = document.querySelector('#to-top');

window.onscroll = function () {
    scrollFunction();
};

const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        header.classList.add('bg');
        backButton.style.display = 'block';
    } else {
       header.classList.remove('bg');
       backButton.style.display = 'none';
    }
};

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
    if (nav.classList.contains('responsive')){
        nav.classList.remove('responsive');
        document.body.style.overflow = '';
} else {
        nav.classList.add('responsive');
        document.body.style.overflow = 'hidden';
}
};

for (const link of links) {
        link.addEventListener('click', mobMenu);
}

mobButton.addEventListener('click', mobMenu);
toTop.addEventListener('click', getToTop);