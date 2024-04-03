import { screen } from '@testing-library/react';

// eslint-disable-next-line import/prefer-default-export
export function getByTextContent(text: string) {
  return screen.getByText((_content, node) => {
    const hasText = (element: Element) => element.textContent === text;
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(child => !hasText(child));

    return nodeHasText && childrenDontHaveText;
  });
}
