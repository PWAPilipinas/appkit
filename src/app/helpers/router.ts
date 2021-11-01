import { LitElement, html } from "lit";
import { customElement, property } from 'lit/decorators.js';
import { URLPattern } from 'urlpattern-polyfill/dist';

import { routes } from '../routes';


@customElement('app-router')
export class RouterHelper extends LitElement {

    @property() page;

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();

        this.handleRoute();
        window.addEventListener('hashchange', this.handleRoute);
        window.addEventListener('appnavigate', (ev) => {
            if(ev['detail'].includes('http')) {
                window.location.replace(ev['detail']);
            } else {
                window.history.pushState({},document.title, ev['detail']);
                this.handleRoute();
            }
        });
        window.addEventListener('popstate', (ev) => {
            this.handleRoute();
        });
    }

    handleRoute() {
        routes.forEach(elem => {
            let p = new URLPattern({ pathname: elem.route });
            if(p.exec(window.location.href)) this.page = elem.name;
        });
    }

    render() {
        return this.page || html`<p>Not found</p>`;
    }
}

@customElement('app-link')
export class LinkHelper extends LitElement {

    @property() href;
    @property() style;

    constructor() {
        super();
    }

    handler(event) {
        event.preventDefault();
        const ev = new CustomEvent('appnavigate', { detail: this.href || null });
        window.dispatchEvent(ev);
    }

    render() {
        let tpl = html`
            <a href="javascript:void(0);" @click="${this.handler}" style="${this.style}">
                <slot><slot/>
            </a>
        `;
        if(this.href.includes('http') && this.href[0] === 'h') {
            tpl = html`
                <a href="${this.href}" style="${this.style}">
                    <slot><slot/>
                </a>
            `;
        }
        return tpl;
    }
}