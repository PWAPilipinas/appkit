import { html } from 'lit';

export const routes = [
    { route: '', name: html`<page-home></app-home>` },
    { route: '/', name: html`<page-home></app-home>` },
    { route: '/template', name: html`<page-template></app-template>` }
];