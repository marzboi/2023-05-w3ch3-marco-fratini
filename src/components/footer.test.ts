/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from './footer';

describe('Given the component Footer', () => {
  document.body.innerHTML = '<section><section>';
  describe('When given the selector of section', () => {
    test('Then the document should contain a new Footer element', () => {
      new Footer('section', 'Marquito');
      const element = screen.getByRole('contentinfo');
      expect(element).toBeInTheDocument();
    });
  });
});
