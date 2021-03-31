var teclas = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37
};

var area = document.getElementById("areaDibujo");
var papel = area.getContext("2d");
var x = 150;
var y = 150;

pintarLinea(x-1,y-1,x+1,y+1,"blue",papel);

function pintarLinea(xinicial, yinicial, xfinal, yfinal, color, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

document.addEventListener("keydown", dibujarLineas);

function dibujarLineas(tecla)
{
    console.log("Tecla oprimida ");
    console.log(tecla);
    var colorcito = "black";
    var movimiento = 5;

    switch(tecla.keyCode)
    {
        case teclas.UP:
            pintarLinea(x, y, x, y - movimiento, colorcito, papel, papel);
            y = y - movimiento;
        break;
        case teclas.DOWN:
            pintarLinea(x, y, x, y + movimiento, colorcito, papel, papel);
            y = y + movimiento;
        break;
        case teclas.RIGHT:
            pintarLinea(x, y, x + movimiento, y, colorcito, papel, papel);
            x = x + movimiento;
        break;
        case teclas.LEFT:
            pintarLinea(x, y, x - movimiento, y, colorcito, papel, papel);
            x = x - movimiento;
        break;
        default:
            console.log("Otra tecla");
        break;
    }
}