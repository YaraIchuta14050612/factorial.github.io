//Java Script para hallar el factorial exacto de un número
// Ichuta Sinka Yara Belen 
// INF - 113 Programación Web 

//prompt nos pedira que ingresemos un valor para la variable en este caso n
n = prompt ("Ingresa un numero del que desees saber su factorial")
//let le asignara a f el valor de 1 
let f = 1;
//el for hara la iteracion necesaria que se usa en el factorial de un numero
    for (let i = 2; i <= n; i++) {
        f *= i;
    }
//el console.log nos mostrara en consola
console.log(`El factorial exacto de ${n} es: ${f}`)
//el document.write nos mostrara en pantalla y podemos darle estilos
document.write('<h1 class="roboto-medium">El factorial exacto de ', n, ' es: ', f, '</h1>');
