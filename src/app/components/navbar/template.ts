import { html } from "lit-html";
import { style } from './style';
export const template = (context) => {
    return html`
        <style>${style}</style>
        <div class="navbar">
            <div class="container">
                <div style="height: 100%;">
                    <app-link href="/" style="color: white; font-size: 20pt; text-decoration: none;">
                        PWA Pilipinas
                    </app-link>
                </div>
            </div>
        </div>
    `;
};