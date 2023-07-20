/** @jsxImportSource @emotion/react */
import React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';
import { css } from '@emotion/react';

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

const Scene2 = () => {
  return (
    <div css={styles.container}>
      <Fiber.Canvas css={styles.canvas} onCreated={state => state.gl.setClearColor("black")} >
        <Drei.PerspectiveCamera makeDefault fov={90} position={[0, 0, 10]}/>
        <Drei.Box args={[2, 2, 2]}>
          <meshBasicMaterial color="red" />
        </Drei.Box>
        <Drei.OrbitControls makeDefault minDistance={2.0} maxDistance={50.0}/>
      </Fiber.Canvas>
    </div>
  );
};

export default Scene2;
