import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import { template } from './template';

@customElement('component-navbar')
export class Component extends LitElement {
    constructor() {
        super();
    }

    render() {
        return template(this);
    }
}