/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const styles = {
  container: css({
    display: 'flex',
    flexDirection: 'column',
  }),
};

const TopMenu = () => {
  
  return (
    <div css={styles.container}>
      <Link to='/scene1'>サンプル(Three.js)</Link>
      <Link to='/scene2'>サンプル(R3F)</Link>
      <Link to='/scene3'>マウスクリック(Three.js)</Link>
      <Link to='/scene4'>マウスクリック(R3F)</Link>
      <Link to='/scene5'>表面に沿ってドラッグ(R3F)</Link>
      <Link to='/scene6'>3DとDOMを分離</Link>
      <Link to='/scene7'>BillboardとText</Link>
    </div>
  );
};

export default TopMenu;
