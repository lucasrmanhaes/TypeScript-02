import { NegociacaoModel } from "../models/negociacao-model.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes;

    //Quem instanciar a classe NegociacaoController irá buscar automaticamente os elementos input no HTML
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    criarNegociacao(): NegociacaoModel{
        const exp = /-/g; //Expressão regular para encontrar "-" e que sejam todos "g": global
        const data: Date = new Date(this.inputData.value.replace(exp, ',')); // inputData: string agora vai ser data e vai substituir a expressão regular por ","
        const quantidade: number = parseInt(this.inputQuantidade.value);
        const valor: number = parseFloat(this.inputValor.value);
        return new NegociacaoModel(data, quantidade, valor);
    }

    adicionar(): void{
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoes.listar();
        this.limparFormulario();
        console.log(this.negociacoes.listar());
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}