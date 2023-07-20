import React from 'react';
import { render } from '@testing-library/react';
import Scene6 from '@src/Scene6'

describe('Scene6', () => {
  let originResizeObserver;
  beforeEach(() => {
    originResizeObserver = global.ResizeObserver;
    global.ResizeObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));
  });

  afterEach(() => {
    global.ResizeObserver = originResizeObserver;
  });

  it('初期表示', () => {
    const { asFragment } = render(
      <Scene6/>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
