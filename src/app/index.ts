import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import './helpers/router';

// pages
import './pages/home';
import './pages/template';

@customElement('app-root')
export class App extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`<app-router></app-router>`;
    }
}