import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('page-home')
export class App extends LitElement {
    constructor() {
        super();
    }
    render() {
        return html`
            <h1>Home Pages</h1>
            <app-link
                href="https://google.com"
                style="color: red; text-decoration: none;">
                Template
            </app-link>
        `;
    }
}