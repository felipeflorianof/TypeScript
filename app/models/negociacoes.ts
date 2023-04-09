import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; // ou: private negociacoes: Array<Negociacao> = [];


    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    
    listar(): readonly Negociacao[]  {
       return this.negociacoes;
    }
}