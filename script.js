//perguntas

var escolha = null

var pergunta = document.getElementById('pergunta')

//butons
var btnA = document.getElementById('btnA')
var btnB = document.getElementById('btnB')
var btnC = document.getElementById('btnC')
var btnD = document.getElementById('btnD')
var todos = document.getElementById('todos')

var numerador = document.getElementById('numero')
var DivNumerador = document.getElementById('numerador')
//perguntas e respostas

var id = 0


var perguntas  = ['2 + 2', 'Quem é o maior youtuber','qual pokemon sabe falar', 'qual foi a primeira pergunta', '(Fortinite) qual boss estáva na auturidade na temporada 3 capitulo 2', '(Fortinite) Quanto custa a skin dominador', 'qual pergunta foi copiada do burro quiz 1?', 0 ,'qual é a pergunta atual ?', 'qual é o nome completo do seu barriga', 'O que era o restaurante de Dona Florinda antes de ser um restaurante?', 'qual é a arma com mais precisão do free fire?', 'quantas armas tem no airdrop (Free fire)', 'qual foi a resposta da 4 ?', 'na tabela periodica qual elemento equivale ao cobre ?', 'quanto é 10% de 5 mil', 'quantos inscritos o canal <a target = "_blank" href= "https://www.youtube.com/channel/UCCaVeXQrVuG7YaMUjwlHL0A"> Blox 1.002</a> tem ? (07/02/2021)', 'Chute :)', 'confie em mim :)', 'em que ano saiu o primeiro episodio de scooby doo', 'Quantos episodios o dezenho "power rangers in space" tem ?', 'quantos aliens o ben 10 criança tinha', 'Quantas vezes o felipe neto pintou o cabelo ?']

var respostasA = ['1', 'felipe neto', 'pikachu', '1', 'luccas neto', '1200', '0', 0 ,'6', 'seu barrigudo', 'um botequim', 'mp40', '1', 'A', 'co', '50', '10', '', 'certo', '1958', '40', '19', '14']

var respostasB = ['4', 'pewdie pie', 'meowth', '2', 'midas', '1500', '4', 0 , '7', 'zezon barriga e pesado', 'um cabelereiro', 'awm', '4', 'B', 'cu', '1000', '7 mil', '', 'errado', '1968', 'não existe', '10', '11']

var respostasC = ['3', 'T-series', 'mewtwo', '100', 'jules', '800', 'nenhuma', 0 , '9', 'zezon cachalote','um salão', 'bazuka', '3', 'C', 'h30', '100', '8 mil', '', 'esse não', '1983', '43', '16', '6']

var respostasD = ['7', 'Resende Evil', 'Deoxys', '0', 'deadpool', 'não existe', '1', 0, '8', 'zezon gonzález', 'sempre foi um restaurante', 'sks', '2', 'D', 'cp0', '500', '6 mil', '', 'errado', '1969', '45', '17', '21']

var cetas = ['B','B', 'todos', 'D','C', 'D', 'A', 0 ,'D', 'B', 'A', 'B', 'C', 'C', 'B', 'D', 'B', 'todos', 'A', 'D', 'C','A', 'D']

//sistema

function respostaA(){
    escolha = 'A'
    verificar()
}

function respostaB(){
    escolha = 'B'
    verificar()
}

function respostaC(){
    escolha = 'C'
    verificar()
}

function respostaD(){
    escolha =  'D' 
    verificar()
}

function respostaTd(){
    escolha =  'todos' 
    verificar()
}

function respostaNu(){
    escolha = 'Nu'
    alert('foi')
    verificar()
}

function verificar(){
    if (escolha === cetas[id]){
        id += 1
        if (id == 7){
            id += 1
        }
        
        if (id == 23){
            window.location = 'final.html'
            return
        }

        numerador.innerText = id.toString() + '.'
        
        pergunta.innerHTML = perguntas[id]

        btnA.value = respostasA[id]
        btnB.value = respostasB[id]
        btnC.value = respostasC[id]
        btnD.value = respostasD[id]

    }
    else{
        window.location.href = 'fail.html'
    }


}

//eventos
btnA.addEventListener('click' , respostaA)
btnB.addEventListener('click' , respostaB)
btnC.addEventListener('click' , respostaC)
btnD.addEventListener('click' , respostaD)
todos.addEventListener('click', respostaTd)



