//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [3.5, 4.2, 5, 3, 6.5, 3];
let comprimentoCarros = 50;
let alturaCarros = 37;

// // carro 1
// let xCarro = 600;

// //carro 2
// let xCarro2 = 600;

// //carro 3 
// let xCarro3 = 600;

function mostraCarro() {
    for (let i = 0; i < imagemCarros.length; i++ ){
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}
  

function voltaPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i++){
  
    if (passouTodaTela(xCarros[i])) {
     xCarros[i] = 600;  
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}