let caja = document.querySelector('.tarjetas');

let crearBoton = document.querySelector('#btnCrear');
let mostrarTarjetaBtn = document.querySelector('#mostrarTarjetaBtn');
crearBoton.addEventListener('click', () => {
  if(verificarEntrada(cargarTitulo()) && verificarEntrada(cargarCuerpo()) && verificarEntrada(cargarImagen())) {
    caja.appendChild(crearTarjeta());
  } else {
    alert('faltan campos por rellenar.');
  }
  eliminarEntrada();
});

mostrarTarjetaBtn.addEventListener('click', mostrarTarjetas);

  function crearTarjeta() {
    let tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    tarjeta.addEventListener('click', alternar);
    let imagen = document.createElement('img');
    imagen.classList.add('tarjeta-img-sup');
    imagen.setAttribute('src', cargarImagen());
    let cuerpo = document.createElement('div');
    cuerpo.classList.add('tarjeta-cuerpo');
    let titulo = document.createElement('h4');
    titulo.classList.add('tarjeta-titulo');
    titulo.innerHTML = cargarTitulo();
    let texto = document.createElement('p');
    texto.classList.add('tarjeta-texto');
    texto.innerHTML = cargarCuerpo();
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(texto);
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(cuerpo);
    return tarjeta;
  }


  function cargarTitulo() {
    let titulo = document.querySelector('.titulo').value;
    return titulo;
  }

  function cargarImagen() {
    let  url= document.querySelector('.url').value;
    return url;
  }

  function cargarCuerpo() {
    let textArea = document.querySelector('.textArea').value;
    return textArea;
  }

  function verificarEntrada(value) {
    let verificar = false;
    if(value !== '') {
      verificar = true;
    }
    return verificar;
  }

  function eliminarEntrada() {
    document.querySelector('.titulo').value = '';
    document.querySelector('.url').value = '';
    document.querySelector('.textArea').value = '';
  }

  function alternar() {
    document.querySelector('.tarjeta').classList.replace('tarjeta', 'ocultar');
  }

  function mostrarTarjetas() {
    document.querySelector('.ocultar').classList.replace('ocultar', 'tarjeta');
  }


/*
let count = document.getElementById('div').children.length;
console.log(count); //element.children, encuentra los elementos hijos

let fahter = document.getElementById('p2').parentElement.id;
console.log(fahter); //element.parentElement, encuentra el elemento padre.


let prevBro = document.getElementById('p2').previousElementSibling.innerText;
console.log(prevBro); //element.previousElementSibling, encuentra el hermano anterior.

let nextBro = document.getElementById('p2').nextElementSibling.innerText;
console.log(nextBro); //element.nextElementSibling, encuentra el siguiente hermano.

let centBro = document.getElementById('p1').nextElementSibling.innerText;
console.log(centBro);

//Retorna un nodo
let primerParr = document.querySelector(".p1");
console.log(primerParr);

let segunParr = document.getElementById('p2');
console.log(segunParr);*/
