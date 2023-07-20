/** @jsxImportSource @emotion/react */
import React from "react";
import * as THREE from 'three';
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

const Scene4 = () => {
  const onBoxClicked = (event: Fiber.ThreeEvent<MouseEvent>) => {
    const targetMaterial = (event.object as THREE.Mesh).material as THREE.MeshBasicMaterial;
    const currentColor = targetMaterial.color.getHex();
    targetMaterial.color = new THREE.Color((currentColor << 8) | (currentColor >> (24 - 8)));
  };

  return (
    <div css={styles.container}>
      <Fiber.Canvas css={styles.canvas} onCreated={state => state.gl.setClearColor("black")} >
        <Drei.PerspectiveCamera makeDefault fov={60} position={[0, 0, 10]}/>
        <Drei.Box args={[2, 2, 2]} onClick={onBoxClicked}>
          <meshBasicMaterial color="red" />
        </Drei.Box>
        <Drei.Sphere position={[3, 3, 3]} args={[1.0, 32, 32]}>
          <meshBasicMaterial color="white"/>
        </Drei.Sphere>
        <Drei.OrbitControls makeDefault minDistance={2.0} maxDistance={50.0}/>
      </Fiber.Canvas>
    </div>
  );
};

export default Scene4;
