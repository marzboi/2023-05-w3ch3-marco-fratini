/* eslint-disable no-new */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given the component Header', () => {
  document.body.innerHTML = '<section><section>';
  describe('When given the selector of <div>', () => {
    test('Then the document should contain a new Header element', () => {
      new Header('section');
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
