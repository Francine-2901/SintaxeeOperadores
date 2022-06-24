function comparaNumeros(num1, num2) {
    const primieraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primieraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (soma > 10){
            compara10 = 'maior';
    }

    if (soma > 20) {
            compara20 = 'maior';
    }
   
    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(20, 20));