//lienzo
const tamanoazulejo = 50;
const fila =14;
const columna= 20;

let lienzo;
const lienzoancho = tamanoazulejo * columna;
const lienzoalto = tamanoazulejo * fila;
let contexto;

//nave
const naveancho = tamanoazulejo*2;
const navealto = tamanoazulejo;
const naveX = tamanoazulejo*columna/2-tamanoazulejo;
const naveY = tamanoazulejo*fila-tamanoazulejo*2;

//estructura nave
let nave={
    X:naveX,
    Y:naveY,
    ancho:naveancho,
    alto:navealto
}

let naveImagen;
const naveVelocidadX= tamanoazulejo;

//alien 



let alienArray = [];
const alienaltura = tamanoazulejo;
const alienanchura= tamanoazulejo*2;
const alienX= tamanoazulejo;
const alienY= tamanoazulejo;
let alienImagen ;



let alienfila = 2;
let aliencolumna = 3;
let aliencuenta;
let alienVelocidadX = 1;


//balas

let balasArray = [];
const balasVelocidadY =-10;



let puntuacion =0;
let GameOver = false;

window.onload = function() {
   
    lienzo = document.getElementById("lienzo");
    lienzo.width = lienzoancho;
    lienzo.height = lienzoalto;
    contexto = lienzo.getContext("2d"); 

    //cargar imagenes
    naveImagen = new Image();
    naveImagen.src = "./nave.png";
    naveImagen.onload = function() { 
        contexto.drawImage(naveImagen, nave.X, nave.Y, nave.ancho, nave.alto);
    }

    alienImagen = new Image();
    alienImagen.src = "./alien.png";
    crearAliens();

    mysong = document.getElementById("cancion");
    mysong2 = document.getElementById("efecto");
    requestAnimationFrame(actualizar);
    document.addEventListener("keydown", moverNave);
    document.addEventListener("keyup", disparar);
    
    document.addEventListener("click",function(){
        if(GameOver){
            alert('Game over!');
            location.reload();
        }
    });

    
}

function actualizar() {
    requestAnimationFrame(actualizar);

    if (GameOver) {
        return;
    }

    contexto.clearRect(0, 0, lienzo.width, lienzo.height);

    //nave
    contexto.drawImage(naveImagen, nave.X, nave.Y, nave.ancho, nave.alto);

    //alien
    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i];
        if (alien.alive) {
            alien.x += alienVelocidadX;

            //si toca el borde
            if (alien.x + alien.ancho >= lienzo.width || alien.x <= 0) {
                alienVelocidadX *= -1;
                alien.x += alienVelocidadX*2;

                //mover todos los alienígenas una fila hacia arriba
                for (let j = 0; j < alienArray.length; j++) {
                    alienArray[j].y += alienaltura;
                }
            }
            contexto.drawImage(alienImagen, alien.x, alien.y, alien.ancho, alien.alto);

            if (alien.y >= nave.Y) {
                GameOver = true;
                
            }
        }
    }

    //balas
    for (let i = 0; i < balasArray.length; i++) {
        let balas = balasArray[i];
        balas.y += balasVelocidadY;
        contexto.fillStyle="white";
        contexto.fillRect(balas.x, balas.y, balas.ancho, balas.alto);

        //balas colisionan con aliens
        for (let j = 0; j < alienArray.length; j++) {
            let alien = alienArray[j];
            if (!balas.used && alien.alive && detectarColision(balas, alien)) {
                balas.used = true;
                alien.alive = false;
                aliencuenta--;
                puntuacion += 100;
            }
        }
    }

    //limpiar balas
    while (balasArray.length > 0 && (balasArray[0].used || balasArray[0].y < 0)) {
        balasArray.shift(); //remueve el primer elemento del arrayElimina el primer elemento de una matriz y lo devuelve
    }

    //siguiente nivel
    if (aliencuenta == 0) {
        
        puntuacion += aliencolumna * alienfila * 100; 
        aliencuenta = Math.min(aliencolumna + 1, columna/2 -2); 
        alienfila = Math.min(alienfila + 1, fila-4);  
        if (alienVelocidadX > 0) {
            alienVelocidadX += 1; 
        }
        else {
            alienVelocidadX -= 1;
        }
        alienArray = [];
        balasArray = [];
        crearAliens();
    }

    //puntuacion
    contexto.fillStyle="white";
    contexto.font="16px courier";
    contexto.fillText(puntuacion, 5, 20);

}

function moverNave(e) {
    mysong.play();
    if (GameOver) {
        return;
    }
    if (e.code == "ArrowLeft" && nave.X - naveVelocidadX >= 0) {
        nave.X -= naveVelocidadX; //mover a la izquierda
    }
    else if (e.code == "ArrowRight" && nave.X + naveVelocidadX + nave.ancho <= lienzo.width) {
        nave.X += naveVelocidadX; //mover a la derecha
    }
}

function crearAliens() {
    for (let c = 0; c < aliencolumna; c++) {
        for (let r = 0; r < alienfila; r++) {    

            let alien = {
                ima : alienImagen,
                x : alienX + c*alienanchura,
                y : alienY + r*alienaltura,
                ancho : alienanchura,
                alto : alienaltura,
                alive : true
            }

            alienArray.push(alien);
        }
    }
    aliencuenta = alienArray.length;
}

function disparar(e) {
    mysong2.play();
    if (GameOver) {
        return;
    }

    if (e.code == "Space") {
        //dispara    
        let balas = {
            x : nave.X + naveancho*15/32,
            y : nave.Y,
            ancho : tamanoazulejo/8,
            alto :tamanoazulejo/2,
            used : false
        }

        balasArray.push(balas);
    }
}

function detectarColision(a, b) {
    return a.x < b.x + b.ancho &&  a.x + a.ancho > b.x &&   a.y < b.y + b.ancho &&   a.y + a.ancho> b.y;    
}
