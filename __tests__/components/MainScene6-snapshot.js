import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import MainScene6 from '@src/components/MainScene6';

// eslint-disable-next-line import/no-extraneous-dependencies
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

describe('MainScene6', () => {
  it('初期表示', async () => {
    const renderer = await ReactThreeTestRenderer.create(
      <MainScene6/>,
    );
    expect(renderer.toTree()).toMatchSnapshot();
  });
});