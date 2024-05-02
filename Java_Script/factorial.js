//Java Script para hallar el factorial de un número
// Ichuta Sinka Yara Belen 
// INF - 113 Programación Web 

//prompt nos pedira que ingresemos un valor para la variable en este caso n
n = prompt ("Ingresa un numero del que desees saber su factorial")
//designacion de valores de pi y e
pi = Math.PI
e = Math.E
//formula basada en la formula que nops dieron
f = Math.sqrt(2 * pi * n) * ((n / e)**n)
//el console.log nos mostrara en consola
console.log(`El factorial de ${n} es: ${f}`)
//el document.write nos mostrara en pantalla y podemos darle estilos
document.write('<h1 class="roboto-medium">El factorial de ', n, ' es: ', f, '</h1>');