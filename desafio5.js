function inverterString(string){
    let stringInvertida = "";
    let arrayDaString = string.split('');

    for (i=arrayDaString.length-1; i>=0; i--){
        stringInvertida = stringInvertida + arrayDaString[i]
    }
    console.log(stringInvertida)
}

//use a função "inverterString" e passe como parâmetro a string a ser invertida.
//exemplo:
inverterString("Será que foi?")