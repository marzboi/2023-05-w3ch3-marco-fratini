import { Component } from './component';
import './header.css';
export class Header extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <header>
      <h1>Marco's Amazing Pets</h1>
    </header>
    `;
  }
}
