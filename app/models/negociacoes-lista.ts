import { NegociacaoModel } from "./negociacao-model";

export class NegociacoesLista {

    private negociacoes: Array<NegociacaoModel> = [];

    adicionar(negociacao: NegociacaoModel): void{
        this.negociacoes.push(negociacao);
    }

    listar(): ReadonlyArray<NegociacaoModel>{
        return this.negociacoes;
    }

}