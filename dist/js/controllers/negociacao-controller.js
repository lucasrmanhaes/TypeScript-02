import { NegociacaoModel } from '../models/negociacao-model.js';
import { NegociacoesLista } from '../models/negociacoes-lista.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { NegociacaoMensagemView } from '../views/negociacoes-mensagem-view.js';
export class NegociacaoController {
    //Quem instanciar a classe NegociacaoController irá buscar automaticamente os elementos input no HTML
    constructor() {
        this.negociacoes = new NegociacoesLista();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.negociacoesMensagemView = new NegociacaoMensagemView('#negociacoesMensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    criarNegociacao() {
        const exp = /-/g; //Expressão regular para encontrar "-" e que sejam todos "g": global
        const data = new Date(this.inputData.value.replace(exp, ',')); // inputData: string agora vai ser data e vai substituir a expressão regular por ","
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new NegociacaoModel(data, quantidade, valor);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.negociacoesMensagemView.update('Negociação realizada');
        this.limparFormulario();
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
    }
}
