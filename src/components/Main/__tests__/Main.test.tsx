import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TestingProvider } from '@tokopedia/skipper/testing';

import Main from '../../Main/index';

describe('Main component', () => {
  it('should render without error', async () => {
    render(
      <TestingProvider>
        <Main>
          <div>Dummy text</div>
        </Main>
      </TestingProvider>,
    );

    const text = screen.getByText('Dummy text');

    expect(text).toBeInTheDocument();
  });
});
