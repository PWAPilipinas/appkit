import { html } from "lit-html";
import { style } from './style';
import '../../components/navbar';

export const template = (context) => {
    return html`
        <style>${style}</style>
        <component-navbar></component-navbar>
    `;
};