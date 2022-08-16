import { Router } from "@lit-labs/router";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import "./my-welcome";

@customElement("my-element")
class MyElement extends LitElement {
  private _routes = new Router(this, [
    { path: "/", render: () => html`<h1>Home</h1>` },
    { path: "/welcome/*", render: () => html`<my-welcome></my-welcome>` },
  ]);

  render() {
    return html`
      <header>...</header>
      <main>${this._routes.outlet()}</main>
      <footer>...</footer>
    `;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
