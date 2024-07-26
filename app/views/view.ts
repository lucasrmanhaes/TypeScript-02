export class View<T> {

    //Protected: atributo privado PORÉM que herda dessa classe também tem acesso
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor)
    }

    template(modelo: T): string{
        throw Error('Classe filha precisa implementar a função template()');
    }

    update(modelo: T): void{
        const template = this.template(modelo);
        this.elemento.innerHTML = template;
    }

}