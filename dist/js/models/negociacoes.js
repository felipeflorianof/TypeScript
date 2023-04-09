export class Negociacoes {
    constructor() {
        this.negociacoes = []; // ou: private negociacoes: Array<Negociacao> = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
    }
}
