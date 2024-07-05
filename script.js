const blocoUm = document.getElementById('blocoUm');
const blocoDois = document.getElementById('blocoDois');
const container = document.getElementById('container');
let esquerda = 0;
let direita = 0;
let background = "https://i.redd.it/v3fhdu9qndab1.jpg"
blocoUm.addEventListener("dblclick", function(){
    esquerda++;
    console.log(esquerda);
})

blocoDois.addEventListener("dblclick", function(){
    direita++;
    console.log(direita);
});
container.addEventListener('dblclick', function (){
    if(esquerda === 1 && direita === 0 && background === "https://i.redd.it/v3fhdu9qndab1.jpg"){
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuZ9nB0EzyUxPDOMqhu8EJR0hbu6c8XwpbQ&s')";
        background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuZ9nB0EzyUxPDOMqhu8EJR0hbu6c8XwpbQ&s';
    }
    if(esquerda === 0 && direita === 1 && background=== "https://i.redd.it/v3fhdu9qndab1.jpg"){
        document.body.style.backgroundImage = 'url("https://media.tenor.com/DtD4LZbctTIAAAAM/tamm-cat.gif")'
        background = "https://media.tenor.com/DtD4LZbctTIAAAAM/tamm-cat.gif"
    }
    if(esquerda === 1 && direita === 1 && background === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuZ9nB0EzyUxPDOMqhu8EJR0hbu6c8XwpbQ&s'){
        document.body.style.backgroundImage = "url('https://i1.sndcdn.com/artworks-Q61q2IpGG3x0QvIQ-FRIyHw-t1080x1080.jpg')";
        background = "https://i1.sndcdn.com/artworks-Q61q2IpGG3x0QvIQ-FRIyHw-t1080x1080.jpgs"
    }
})