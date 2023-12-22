/*  abaixo 17, mensagem: 'Muito abaixo do peso'
    entre 17 e 18,49, mensagem: 'Abaixo do peso'
    entre 18,5 e 24,88, mensagem: 'Peso normal'  
    entre 25 e 29,99, mensagem: 'Acima do peso'  
    IMC = peso / altura*altura
    */

let peso
let altura
let imc
let resultado

function calcular(event) {
    event.preventDefault()

    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value
    resultado = document.getElementById('resultado')

    imc = peso / (altura * altura)

    if (imc < 17) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/>Cuidado, você está muito abaixo do peso!'
    } else if(imc > 17 && imc <= 18.49){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/>Cuidado, você está abaixo do peso!'
    } else if(imc > 18.49 && imc <= 24.88){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/>Parabéns, você está no peso normal :)'
    } else if(imc > 25 && imc <= 29.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/>Cuidado, você está acima do peso!'
    } else {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/>Se liga !! você está obeso !'
    }

    document.getElementById('altura').value = ''
    document.getElementById('peso').value = ''
}
