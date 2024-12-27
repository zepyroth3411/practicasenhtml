// Función para verificar si un número es par o impar
function verificarParImpar() {
    const numero = parseInt(document.getElementById('numero-par').value);
    const resultado = document.getElementById('resultado-par');

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    resultado.textContent = numero % 2 === 0 
        ? `${numero} es un número par.` 
        : `${numero} es un número impar.`;
}
// Funcion para solicitar al usuario tres números
function mayordetres(){
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const res1 = document.getElementById('res1')
    // Convertir las entradas a números
    const a = Number(num1);
    const b = Number(num2);
    const c = Number(num3);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            res1.textContent="Por favor, ingresa valores numéricos válidos.";
        }   else {
        if (a === b && b === c) {
            res1.textContent = "Todos los números son iguales.";
        } else if (a >= b && a >= c) {
            res1.textContent = `El mayor número es: ${a}`;
        } else if (b >= a && b >= c) {
            res1.textContent = `El mayor número es: ${b}`;
        } else {
            res1.textContent = `El mayor número es: ${c}`;
        }
    }

}
// Funcion para evaluar calificaciones
function calificaciones(){
    // Solicitar al usuario un número del 0 al 10
    const input = parseInt(document.getElementById('calif1').value);
    const res2 = document.getElementById('res2');
    
    const numerito = input;
    
    if (isNaN(numerito) || numerito < 0 || numerito > 10) {
        res2.textContent = "Por favor, ingresa un número válido entre 0 y 10.";
    } else {
        // Determinar la calificación en texto
        if (numerito >= 0 && numerito <= 5) {
            res2.textContent = "Reprobado";
        } else if (numerito >= 6 && numerito <= 7) {
            res2.textContent = "Regular";
        } else if (numerito === 8) {
            res2.textContent = "Bien";
        } else if (numerito === 9) {
            res2.textContent = "Muy Bien";
        } else if (numerito === 10) {
            res2.textContent = "Excelente";
        }
    }

}
// Funcion para evaluar un rango
function rango(){
    const dato = parseInt(document.getElementById('dato').value);
    const res3 = document.getElementById('res3');
    if (dato >= 1 && dato <= 100) {
        res3.textContent = "Número válido";
    } else {
        res3.textContent = "Número fuera de rango";
    }
}
// Funcion para evaluar una serie de fibonacci 
function fibo(){
     // Solicitar al usuario un número
    const numero = parseInt(document.getElementById('fibo1').value);
    const res4 = document.getElementById('res4');

    // Validar que el número sea positivo
    if (isNaN(numero) || numero < 0) {
        res4.textContent = "Por favor, ingresa un número entero positivo.";
    } else {
        const fibonacci = [0, 1]; 
        for (let i = 2; i <= numero; i++) {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
        res4.textContent = `La sucesión de Fibonacci hasta el número ${numero} es: ${fibonacci.join(', ')}`;
    }
}
// Funcion para evaluar un palindromo
function palindromo(){
      const numero = parseInt(document.getElementById('pal1').value);
      const res5 = document.getElementById('res5');

      if (numero < 0) {
        res5.textContent = "Por favor, ingresa un número entero positivo.";
        return;
    }

    const numeroStr = numero.toString();

    let izquierda = 0;
    let derecha = numeroStr.length - 1;

    while (izquierda < derecha) {
        if (numeroStr[izquierda] !== numeroStr[derecha]) {
            res5.textContent = `${numero} no es un palíndromo.`;
            return;
        }
        izquierda++;
        derecha--;
    }
    res5.textContent = `${numero} es un palíndromo.`;    
}
// Funcion para evaluar palabras anagramas
function verificarAnagramas() {
    const palabra1 = document.getElementById('palabra1').value.trim().toLowerCase();
    const palabra2 = document.getElementById('palabra2').value.trim().toLowerCase();
    const resultado = document.getElementById('resultado-anagramas');

    if (!palabra1 || !palabra2) {
        resultado.textContent = "Por favor, ingresa ambas palabras.";
        return;
    }

    const ordenada1 = palabra1.split('').sort().join('');
    const ordenada2 = palabra2.split('').sort().join('');

    resultado.textContent = (ordenada1 === ordenada2) 
        ? `"${palabra1}" y "${palabra2}" son anagramas.` 
        : `"${palabra1}" y "${palabra2}" no son anagramas.`;
}