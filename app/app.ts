import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacoes } from './models/negociacoes.js';

const negociacaoController = new NegociacaoController();

const form = document.querySelector(".form");
form.addEventListener('submit', event => {
    event.preventDefault();
    negociacaoController.adicionar();
});

