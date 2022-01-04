function mudar () {
   mudarClasses()
   mudarTexto()
}
function mudarClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}
function mudarTexto(){
    if (body.classList.contains(darkModeClass)){
        button.innerHTML = 'Light Mode';
        h1.innerHTML = 'Dark-Mode ON';
        return;
    }
    button.innerHTML = 'dark Mode';
        h1.innerHTML = 'Light Mode ON';

}
const darkModeClass ='dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
console.log(body)
button.addEventListener('click',mudar);
