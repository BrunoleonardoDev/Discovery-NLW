function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    
    // pegar a tag img
    const img = document.querySelector('.avatar img')

    // substituir a imagem
   if(html.classList.contains('light')) {
       // se tiver light mode, adicionar imagem light
       img.setAttribute('src', 'assets/img/avatar-light.jpg')
   } else {
       // se tiver sem light mode, manter a imagem original
        img.setAttribute('src', 'assets/img/rsz_airbrush_20221015174345.jpg')
   }





}