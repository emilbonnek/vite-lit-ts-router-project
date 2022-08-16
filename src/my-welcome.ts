import { Router } from "@lit-labs/router";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-welcome")
export class MyWelcome extends LitElement {
  private _router = new Router(this, [
    { path: "sign-in", render: () => html`<h1>Sign-in</h1>` },
    { path: "sign-up", render: () => html`<h1>Sign-up</h1>` },
    { path: "forgot-password", render: () => html`<h2>Forgot-password</h2>` },
  ]);
  render() {
    return html`<div>
    <p>My welcome</p>
      <div>${this._router.outlet()}</div>
      </div`;
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "my-welcome": MyWelcome;
  }
}
