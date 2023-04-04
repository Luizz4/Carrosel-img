let contador = 1;

setInterval(fuction(){
    document.getElementByid('slide' + contador).checked = true;
contador ++;

if(contador){
    contador=1;
}

},  3000)