window.addEventListener('load', ()=>{
    const pageLoader = document.querySelector('.page-loader');
    if (pageLoader) {
        pageLoader.classList.add('finished-loading');
    }
})


document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('#mobile-menu-button');
    const navContainer = document.querySelector('#nav-container');



    mobileMenuBtn.addEventListener('click', ()=>{
        navContainer.classList.toggle('mobile-menu-active');
    })
});

