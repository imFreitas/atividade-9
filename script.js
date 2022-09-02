function exerc1(){

alert ("EXERCICIO 1")

 let n1 = parseInt(prompt("Digite um número"));
 let n2 = parseInt(prompt("Digite outro número"));
 
 if (n1 > n2)

 return (alert( "O número " + "(" + n1 + ")" + " é maior que o  número " + "(" + n2 + ")"));

else  return (alert( "O número " + "(" + n2 + ")" + " é maior que o  número " + "(" + n1 + ")"));

}
exerc1();

function exerc2(){

    alert ("EXERCICIO 2");

    let n = parseInt(prompt("Insira um número"));

    if(n > 0){        
        return(alert(n + ", é positivo"));
    }else if (n < 0){

        return(alert(n + ", é negativio"));

    }else {
        return(alert(n + ", é nulo"));
    }
}
exerc2();

function exerc3(){
    alert ("EXERCICIO 3");

    let n1 = parseInt(prompt("Digite o primeiro número"));
    let n2 = parseInt(prompt("Digite o segundo número"));
    let n3 = parseInt(prompt("Digite o terceiro número"));

        if (n1 > n2 && n1 > n3){
            return(alert("O numero "+ n1 + " é maior"));
        }
            else if (n2 > n1 && n2 >n3){
                return(alert("O numero "+ n2 + " é maior"));
            }
        else (n3 > n1 && n3> n2)
            return(alert("O numero "+ n3 + " é maior"));
        }

exerc3();

function exerc4(){
    alert ("EXERCICIO 4");

    let n1 = parseInt(prompt("Digite o primeiro número"));
    let n2 = parseInt(prompt("Digite o segundo número"));
    let n3 = parseInt(prompt("Digite o terceiro número"));

            if (n1 > n2 && n1 > n3){
                if(n2 > n3){

                    let soma = n1 + n2;
                    return(alert("A soma dos maiosoma números é:" + soma));

                }
             }
            if (n2 > n1 && n2 > n3){
                if(n3 > n1){

                    let soma = n3 + n2;
                    return(alert("A soma dos maiores números é:" + soma));

                }
             }
            if (n3 > n2 && n3 > n1){
                if(n1 > n2){

                    let soma = n1 + n3;
                    return(alert("A soma dos maiores números é:" + soma));

                }
             }
}
exerc4()


function exerc5(){
    alert ("EXERCICIO 5");

    let n1 = parseInt(prompt("Digite o primeiro número"));
    let n2 = parseInt(prompt("Digite o segundo número"));
    let n3 = parseInt(prompt("Digite o terceiro número"));
    let n4 = parseInt(prompt("Digite o quarto número"));
    let n5 = parseInt(prompt("Digite o quinto número"));
    let n6 = parseInt(prompt("Digite o sexto número"));

    let media = (n1 + n2 + n3 + n4 + n5+ n6) /6;

    return(alert("A média dos némeros é:" + media));

}
exerc5()

function exerc6(){
    alert ("EXERCICIO 6");

    var n1,n2,n3,n4,

    n1 = parseInt(prompt("Digite o primeiro número"));
    n2 = parseInt(prompt("Digite o segundo número"));
    n3 = parseInt(prompt("Digite o terceiro número"));
    n4 = parseInt(prompt("Digite o quarto número"));
    
    if (n1 == n2 || n1 == n3 || n1 == n4 || n2 == n1 || n2 == n3 || n2 == n4 || n3 == n1 || n3 == n2 || n3 == n4 || n4 == n1 || n4 == n2 || n4 == n3 ) {
        alert("Não digite números iguais");
    }
        else  {
             var numeros = [n1,n2,n3,n4];
                var t = Math.max(...numeros);
        
        }   

alert("O primeiro valor é: " + n1 + " o último valor é: " + n4 + " e maior valor é: " + t);

}
exerc6()

function exerc7(){
    alert ("EXERCICIO 7");

    let n1 = parseInt(prompt("Digite o primeiro número"));
    let n2 = parseInt(prompt("Digite o segundo número"));
    let n3 = parseInt(prompt("Digite o terceiro número"));
    let n4 = parseInt(prompt("Digite o quarto número"));
    let n5 = parseInt(prompt("Digite o quinto número"));
    let n6 = parseInt(prompt("Digite o sexto número"));


if (n1 < 72 && n2 < 72 && n3 < 72 && n4 < 72 < n5 < 72 && n6 < 72) {
    alert("O resultado da soma é: " + (n1 + n2 + n3 + n4 + n5 + n6));
}

else {
    alert("Os numeros são maiores que 72");
}
}
exerc7()

function exerc8(){
    alert ("EXERCICIO 8");

    var n1,n2,n3,n4,soma;

    n1 = parseInt(prompt('Informe o primeiro número'));
    n2 = parseInt(prompt('Informe o segundo número'));
    n3 = parseInt(prompt('Informe o terceiro número'));
    n4 = parseInt(prompt('Informe o quarto número'));
    
    
    if (n1 > 0 && n1 < 10 && n2 > 0 && n2 < 10 && n3 > 0 && n3 < 10 && n4 > 0 && n4 < 10  ){
        soma = (n1 + n2 + n3 + n4) / 4;
    
     if (soma > 5) {
            alert('Você passou no teste com a média: ' + soma); 
        }   
    }
    
    else {
        alert('Tente novamente!');
    }

}
exerc8()

function exerc9(){
    alert ("EXERCICIO 9");

let nome = prompt('Digite seu nome: ');
let anoDncs = parseInt(prompt('Digite o ano de nascimento: '));
let ano_atual = 2022;

let soma = ano_atual - anoDncs;

console.log(soma);

        if (soma >= 16 && soma < 10000000) {
            alert(nome + "Você possui direito de votar. Idade atual: " + soma);
        }
        else if (soma < 16 && soma > 0) {
            alert(nome + "Você não possui direito de votar. Idade atual: " + soma);
        }
        else if (soma >= 16) {
            alert(nome + "Você possui direito de votar, mas não é obrigatório. Idade atual: " + soma);
        }
}

function exerc10(){
    alert ("EXERCICIO 10");

    let sexo = prompt("Qual seu sexo?");
    let nome = prompt("Digite seu nome");
    let altura = parseFloat(prompt("Digite sua altura em centimetros:"));

    if (sexo === "masculino") {
        calculo = (72.7 * altura) - 58;
       alert(nome + "Seu peso ideal é" + calculo.toFixed(2));
    }
    else if (sexo === "feminino") {
        calculo = (62.1 * altura) - 44.7;
       alert(nome + "Seu peso ideal é" + calculo.toFixed(2));
    }
    else {
       alert('Erro tente novamente!!')
    }

}
exerc10()

function exerc11(){
    alert ("EXERCICIO 11");

    let n1 = parseInt(prompt('Digite o primeiro valor: '));
    let n2 = parseInt(prompt('Digite o segundo valor: '));

            if (n1 < 5 && n1 > 0 && n2 < 5 && n2 > 0) {

            alert('Adição: ' + (n1 + n2 ));
            alert('Subtração: ' + (n1 - n2 ));
            alert('Divisão: ' + (n1 / n2 ).toFixed(2));
            alert('Multplicação: ' + (n1 * n2 ));
        }
        else {
            alert('Informe um valor de 1 a 4!');
        }
}
exerc11()

