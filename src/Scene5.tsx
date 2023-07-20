/** @jsxImportSource @emotion/react */
import React from "react";
import * as THREE from 'three';
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';
import { css } from '@emotion/react';
import DragableSphere from "./components/DragableSphere";
import { OrbitControls } from "three-stdlib";

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

const Scene5 = () => {
  const controlRef = React.useRef<OrbitControls>(null);
  
  const onBoxClicked = (event: Fiber.ThreeEvent<MouseEvent>) => {
    const targetMaterial = (event.object as THREE.Mesh).material as THREE.MeshBasicMaterial;
    const currentColor = targetMaterial.color.getHex();
    targetMaterial.color = new THREE.Color((currentColor << 8) | (currentColor >> (24 - 8)));
  };

  const onSphereDragStart = () => {
    if (controlRef.current !== null) controlRef.current.enabled = false;
  }

  const onSphereDragEnd = () => {
    if (controlRef.current !== null) controlRef.current.enabled = true;
  }

  const onSphereDrag = (event: Fiber.ThreeEvent<PointerEvent>) => {
    // moveイベントがCubeにも当たったかを確認
    const modelIntersection = event.intersections.find((intersection) => {
      return intersection.eventObject.name === 'bigCube';
    });
    // 球体を当たったCubeの表面位置に移動
    if (modelIntersection) {
      event.eventObject.position.copy(modelIntersection.point);
    }
  };

  // これは削除したら↑のイベントからbigCubeが出てこない
  const onPointerMove = () => {
  };

  return (
    <div css={styles.container}>
      <Fiber.Canvas css={styles.canvas} onCreated={state => state.gl.setClearColor("black")} >
        <Drei.PerspectiveCamera makeDefault fov={60} position={[0, 0, 10]}/>
        <Drei.Box args={[2, 2, 2]} onClick={onBoxClicked} name='bigCube' 
          onPointerMove={onPointerMove}
          >
          <meshBasicMaterial color="red" />
        </Drei.Box>
        <DragableSphere position={[0, 0, 1]} radius={0.25} onDrag={onSphereDrag}
          onDragStart={onSphereDragStart} onDragEnd={onSphereDragEnd}/>
        <Drei.OrbitControls ref={controlRef} makeDefault minDistance={2.0} maxDistance={50.0}/>
      </Fiber.Canvas>
    </div>
  );
};

export default Scene5;
