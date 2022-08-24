// DESAFIO GIT

var arrayNomes = []
var arraySenhas = []
var contador = 0
var opcao = 0
var continuar = false
var nomeLogin
var senhaLogin = 0
var validacao = false
var nomeExcluir
var arrayNomesAux = []
var arraySenhasAux = []

var continuarGeral = true
while(continuarGeral){   
    opcao = prompt(`1 - Cadastrar/ 2 - Fazer Login/ 3 - Excluir/ 4 - Encerrar`)
    if(opcao == 1){
        continuar = true
    while(continuar){
    arrayNomes[contador] = prompt(`Insira o seu nome`)
    arraySenhas[contador] = parseInt(prompt(`Insira a sua senha`))
    contador++
    var continuarCadastro = prompt(`Deseja cadastrar novos dados 1 - SIM/ 2 - NÃO`)
    if(continuarCadastro != 1){
        continuar = false
    }
    }
    console.log(arrayNomes)
    console.log(arraySenhas)
    }   
    continuarGeral = true
    if(opcao == 2){
        console.log("")
        console.log(`Vamos para o Login!`)
        console.log("")
        nomeLogin = prompt(`Qual o nome do login?`)
        senhaLogin = prompt(`Qual a senha do Login?`)
        validacao = false
        for(var index = 0; index < contador; index++){
            if(nomeLogin == arrayNomes[index] && senhaLogin == arraySenhas[index]){
                validacao = true                
                }
                if(validacao){
                    console.log(`Login feito com sucesso`)
                }
                else{
                    console.log(`Dados incorretos, tente novamente`)
                 }
                }
    }
    if(opcao == 3){
        nomeExcluir = prompt(`Qual nome deseja excluir`)
        for(var index = 0; index < contador; index++){
            if(arrayNomes[index] == nomeExcluir){
                arrayNomes[index] = 0
                arraySenhas[index] = 0
             }                         
        }
            for(var atual = 0; atual < contador - 1; atual++){
                for(var seguinte = atual + 1; seguinte < contador; seguinte++){
                    if(arrayNomes[atual] == 0){
                        arrayNomes[atual] = arrayNomes[seguinte]
                        arraySenhas[atual] = arraySenhas[seguinte]
                        arrayNomes[seguinte] = 0
                        arraySenhas[seguinte] = 0
                    }
                }
            }
                
                for(var i = 0; i < contador; i++){
                    if(arrayNomes[i] != 0){
                        arrayNomesAux[i] =  arrayNomes[i]
                        arraySenhasAux[i] = arraySenhas[i]
                 }
                }
            console.log(arrayNomesAux)
            console.log(arraySenhasAux)                     
    }

    if (opcao == 4){
        continuarGeral = false
    }
}
console.log(arrayNomesAux)
console.log(arraySenhasAux)