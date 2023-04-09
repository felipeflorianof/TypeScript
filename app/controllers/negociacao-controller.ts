import {  Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
export class NegociacaoController 

{
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();

    constructor() {
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    
    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this._inputData.value.replace(exp,','));
        const quantidade = parseInt(this._inputQuantidade.value);
        const valor = parseFloat(this._inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    
    limparformulario(): void {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(12);
        this._negociacoes.adiciona(negociacao);
        console.log(this._negociacoes.listar());
        this.limparformulario();
    }
}   