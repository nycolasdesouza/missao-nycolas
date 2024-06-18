const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-pergunta")
const caixaAlternativa = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
{
   enunciado: "Qual a melhor maneira de se combater o desmatamento?", 
   alternativas: [
      "reflorestamento de áreas",
      "Implementação de leis rigorosas para a proteção das florestas"
   ]
},
{
   enunciado: "Como podemos combater a desigualdade social de forma eficaz e sustentável?", 
   alternativas: [
      "Implementar programas e educação e formação profissional acesíveis a todos",
      "Politicas de resdistribuição de renda e oportunidades"
      ]
    },
   ];

   let atual = 0 
   let perguntaAtual;

   function mostraPergunta(){
     perguntaAtual = pergunta[atual]
     caixaPerguntas.textContent = perguntaAtual.enunciado;
   }
      
