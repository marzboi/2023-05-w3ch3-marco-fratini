/* eslint-disable no-unused-vars */
import { Component } from './component';
import './app-container.css';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <main>
      
    </main>
    `;
  }
}
