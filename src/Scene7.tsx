/** @jsxImportSource @emotion/react */
import React from "react";
import * as THREE from 'three';
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';
import { css } from '@emotion/react';
import { PointLight } from "three";

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

const Scene7 = () => {

  return (
    <div css={styles.container}>
      <Fiber.Canvas css={styles.canvas} onCreated={state => state.gl.setClearColor("black")} >
        <Drei.PerspectiveCamera makeDefault fov={60} position={[0, 0, 10]}/>
        <pointLight color={0xFFFFFF} position={[0, 0, 10]}/>
        <Drei.TorusKnot args={[10, 3, 200, 32]}>
          <meshNormalMaterial></meshNormalMaterial>
        </Drei.TorusKnot>
        <Drei.OrbitControls makeDefault minDistance={2.0} maxDistance={50.0}/>
        <ambientLight color={0xFFFFFF}/>
      </Fiber.Canvas>
    </div>
  );
};


export default Scene7;
