//variaveis

var nomeDaVariavel = "Valor da Variável"; // 

let nomeDaVariavelTemporaria = "Valor temporário da variável ";// várivel temporária

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Váriavel";// váriavel que não tem como mudar o valor dela

console.log("nomeDavariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nmeDaVariavelSomenteLeitura:", nomeDaVariavelSomenteLeitura);

var matriz = ["vetor1", "vetor2", "Vetor3", "Vetor4", "Vetor5"];

console.log("matriz, vetor1:", [0]);

for (let i = 0; i < matriz.length; i++ ) { //  for: estrutura de repeticao pré-definida. enqunto i for menor que "matriz.lenght", ele somará ele + ele msm
    console.log("matriz[" + i + "]: ", matriz[i] ); // i é um indexador que entrega a chave
} 

class NomeDoObjeto {
    constructor (parametroUm, parametroDois) {
        // this.parametroum = "valor 1";
    // this.parametroDois = "valor 2"
    this.parametroUm = parametroUm;
    this.parametroDois = parametroDois;
    return this.parametroUm + " - " +this.parametroDois;
    }
}
const novoObjeto = new NomeDoObjeto();
 console.log(novoObjeto.metodoMostrarParametros("um", "dois"));

class piano {
    constructor (altura, largura,  profundidade, peso, materialDaCaixa, cor, acabamento, teclado, númeroDeTeclas, materialDasTeclas, açãoDeMartelo, 
    material, amortecidores, comprimento, espessura, tabelaHarmônica, forma, rigidez, ponte, bridge, quadroMetálico,  lá4, A4Temperamento, 
    proundidadeDoTeclado, resistência, velocidadeDaAção, acessórios, recursosAdicionais)



    