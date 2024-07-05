function menushow() {
    let menumobile = document.querySelector('.mobile-menu');
    if (menumobile.classList.container('open')) {
        menumobile.classList,remove('open');
        document.querySelector('icon').src = "assets/imagem/logo.png";
    }

    else {
        menumobile.classList.add('open')
        document.querySelector('icon').src = "assets/imagem/logo.png";
    }
}