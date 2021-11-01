import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-template')
export class App extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html`
            <h1>Template</h1>
        `;
    }
}