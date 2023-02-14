 




var userName = 'Jean Paul Guerra'

document.getElementById('user-name').innerHTML = userName

var nome = 'Mestre Yoda'
var idade = 34
var Jedi = true


/* function boasVindas(nome) {

    alert(nome +', Seja bem vindo(a)')


}

boasVindas('Jean Guerra') */









/*function soma(n1, n2) {

    console.log(n1 + n2)

}

soma (10,5); */


// Sendo um Cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam cartão de crédito ou débito


/* var saldo = 1000

function saque(valor){
    
    if (valor > saldo) {
        console.log ('Saldo insuficiente')
    } else if (valor > 700) { 
        console.log ('Valor superior ao máximo permitido para saque')

    } else {

    if (valor )       
    saldo = saldo - valor
}

}

saque(700)
console.log(saldo) */





// Cenário 1: Saque com sucesso.
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo 
// E deve mostrar uma mensagem de alerta informando que o valor é superiro ao saldo

// Cenário 3: Saque com valor máximo.
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar um alerta informando que o valor é superiro ao máximo permitido por operação 



// Arrays // 

/* var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Camisetas']

console.log (gaveteiro[0]) */

/* var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']



personagens.push('C3Po')
personagens.push('R2d2')
// personagens.pop()

personagens = personagens.filter (function(p){
    return p !== 'Darth Vader'
})

personagens = personagens.filter (function(p){
    return p === 'Mestre Yoda'
})

console.log (personagens) */

// Controles de repetição (Loops) //

/* personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader','R2d2'] */

/* personagens.forEach(function(p){
    console.log(p)
}); */

/* for(var i in personagens){

    console.log(personagens[i])
}
 */

/* for(var i = 0; i <= 10; i++){
    console.log(i) */
    //codigo vai ser executado até que a condição retorne false



// Objetos // 

/* var yoda = {

    nome: 'Mestre Yoda',
    idade: 100,
    Jedi: true,
    Feio: true,
    mostraIdade: function(){
        console.log(`A idade do ${this.nome} é ${this.idade} anos`)
    }
}

console.log(yoda)
yoda.mostraIdade()
 */


// Constantes // 

const nome = 'Darth Vader'
console.log(nome)

nome = 'pricesa leia'
console.log(nome)