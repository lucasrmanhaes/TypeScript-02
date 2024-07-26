import {NegociacoesLista} from '../models/negociacoes-lista.js';
import { View } from './view.js';

export class NegociacoesView extends View<NegociacoesLista> {

    template(lista: NegociacoesLista): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                ${lista.listar().map(negociacoes => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacoes.data)}</td>
                            <td>${negociacoes.quantidade}</td>
                            <td>${negociacoes.valor}</td>
                        </tr>
                    `;   
                })}
            </tbody>
        </table>
        `;
    }

    update(lista: NegociacoesLista): void{
        const template = this.template(lista);
        console.log(template);
        this.elemento.innerHTML = template;
    }

}