import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../../components/navbar';
import { template } from './template';

@customElement('page-home')
export class App extends LitElement {
    constructor() {
        super();
    }
    render() {
        return template(this);
    }
}