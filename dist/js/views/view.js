export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(modelo) {
        throw Error('Classe filha precisa implementar a função template()');
    }
    update(modelo) {
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }
}
