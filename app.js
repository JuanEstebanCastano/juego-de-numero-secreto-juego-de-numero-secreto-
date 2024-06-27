let titulo = document.querySelector('h1');
let texto = document.querySelector('p');
// usamos Math.floor para que el numero aletorio sea un numeor esapto
// suamos el Math.ramdom para que el codigo escoja un numereo aleatorio y se multiplica por 10 
// para crear un rango de 1 a 10
let numereoMaximo = 10;
let contatadorIntentos = 0;
let maximoIntentos = 5;
let numeroSecreto = Math.floor(Math.random() * numereoMaximo)+  1;
titulo.innerText = 'Bienbenido al juego del numero secreto';
texto.innerText = `escribe un numero del 1 al ${numereoMaximo}`;
function adivinar() {
    let numeroUsuario = parseInt(document.getElementById('container__input').value)
    // while(numeroUsuario != numeroSecreto){
        
        /*if (contatadorIntentos > maximoIntentos) {
            texto.innerText =`lo ciento has superado el limite de intnetos mi numero es ${numeroSecreto}, el maximo de entos es ${maximoIntentos}`
            break; 
        }*/
        if (numeroUsuario === numeroSecreto) {
            texto.innerText =`Lo lograteas el numero ${numeroUsuario}, lo lograte en ${contatadorIntentos} ${(contatadorIntentos === 1)? 'vez' : 'veces'}`;
            // con el atributi .removeAttribute podemos remover otros atribitos 
            // disabled es un atribito de html el cual desactiva algo 
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        if (numeroUsuario < numeroSecreto) {
            
            texto.innerText =`el numero ${numeroUsuario} es inferio al que tengo en mente`;
        } 
        if (numeroUsuario > numeroSecreto) {
            texto.innerText =`el numero ${numeroUsuario} es superior al que tengo en mente`;
        } 
        contatadorIntentos++;
        limpiar()
    // }
}
 
function limpiar() {
    document.querySelector('#container__input').value = '';

}

function reiniciarJuego(){
    document.querySelector('#container__input').value = '';
    contatadorIntentos = 0;
    maximoIntentos = 5;
    numeroSecreto = Math.floor(Math.random() * numereoMaximo)+  1;
    titulo.innerText = 'Bienbenido al juego del numero secreto';
    texto.innerText = `escribe un numero del 1 al ${numereoMaximo}`;
    // con el atributo .setAttribute puedo aplicar atributos 
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
