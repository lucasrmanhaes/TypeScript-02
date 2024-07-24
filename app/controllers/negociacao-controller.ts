import { NegociacaoModel } from '../models/negociacao-model.js';
import { NegociacoesLista } from '../models/negociacoes-lista.js';
import {NegociacoesView} from '../views/negociacoes-view.js';

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new NegociacoesLista();
    private negociacoesView = new NegociacoesView('#negociacoesView');

    //Quem instanciar a classe NegociacaoController irá buscar automaticamente os elementos input no HTML
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
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
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}