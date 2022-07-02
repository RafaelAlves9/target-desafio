var sequenciaFibonacci = [0,1]


for (i=0; i<1000; i++){
    let ultimoElemento = sequenciaFibonacci[sequenciaFibonacci.length - 1]
    let penultimoElemento = sequenciaFibonacci[sequenciaFibonacci.length - 2]

    sequenciaFibonacci.push(ultimoElemento+penultimoElemento);
}

function checarNumero(numero){
    if( sequenciaFibonacci.includes(numero) ){
        console.log(`O número ${numero} faz parte da sequência Fibonacci`)
    } else console.log(`O número ${numero} não faz parte da sequência Fibonacci`)
}

//use a função "checarNumero" e passe como parâmetro o número a ser verificado.
//exemplo:
checarNumero(5)