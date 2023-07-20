import React from 'react';
import { render } from '@testing-library/react';
import TopMenu from '@src/TopMenu'
import { MemoryRouter } from 'react-router-dom';

describe('TopMenu', () => {
  it('初期表示', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <TopMenu/>,
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
