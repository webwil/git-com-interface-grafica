// Declarando Variaveis
var btnContact = document.querySelector('.jl-btn-contact');
var pagePreloader = document.querySelector('.jl-preloader');

// Page Preloader
window.addEventListener('load', function(){
    pagePreloader.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloader.style.display = 'none';
    }, 2000);
});

// Abrindo e fechando informações de contato
btnContact.addEventListener('click', function() {
    
    let boxContact = document.querySelector('.jl-contact-info');
    boxContact.classList.toggle('jl-is-open');

    this.classList.toggle('jl-change-icon');

});