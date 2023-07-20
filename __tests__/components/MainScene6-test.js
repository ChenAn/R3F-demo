import React from 'react';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import MainScene6 from '@src/components/MainScene6';
import { Color } from 'three';

// eslint-disable-next-line import/no-extraneous-dependencies
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

describe('MainScene6', () => {
  it('１回のクリックでcubeが青に変わる', async () => {
    // 描画
    const renderer = await ReactThreeTestRenderer.create(
      <MainScene6/>,
    );
    // 描画完了まで1フレームを送り
    await ReactThreeTestRenderer.act(async () => {
      await renderer.advanceFrames(1, 1);
    });
    const cube = await renderer.scene.findByProps({ 'name': 'bigCube' });
    const material = await cube.findByType('MeshBasicMaterial');
    expect(material.instance.color).toEqual(new Color('red'));
    await renderer.fireEvent(cube, 'onClick', { object: cube.instance });
    expect(material.instance.color).toEqual(new Color('blue'));
  });
});