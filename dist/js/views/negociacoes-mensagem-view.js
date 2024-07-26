import { View } from './view.js';
export class NegociacaoMensagemView extends View {
    template(modelo) {
        return `
            <p class="alert alert-info">${modelo}</p>
        `;
    }
}
