/** @jsxImportSource @emotion/react */
import React from "react";
import * as Fiber from '@react-three/fiber';
import { css } from '@emotion/react';
import MainScene6 from "./components/MainScene6";

const styles = {
  container: css({
    height: "90vmin",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  }),
  canvas: css({
    width: "100%",
    height: "100%",
    touchAction: "auto",
  }),
};

const Scene6 = () => {
  return (
    <div css={styles.container}>
      <p>テスト用にテキスト</p>
      <Fiber.Canvas css={styles.canvas} onCreated={state => state.gl.setClearColor("black")} >
        <MainScene6/>
      </Fiber.Canvas>
    </div>
  );
};

export default Scene6;
