/** @jsxImportSource @emotion/react */
import * as React from 'react';
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { Vector3 } from "three";
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

const Scene1 = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas === null) {
      return;
    }

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // webgl用レンダラを作成
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000);

    // シーンを作成
    const scene: THREE.Scene = new THREE.Scene();

    // カメラを作成
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(90, 1.0);
    camera.aspect = width / height;
    camera.position.set(0, 0, 10);
    camera.updateProjectionMatrix();

    // カメラを制御するコントローラを作成
    let oribitControls = new OrbitControls(camera, canvas);
    oribitControls.target = new Vector3(0, 0, 0);
    oribitControls.minDistance = 2.0;
    oribitControls.maxDistance = 50.0;

    // Cubeオブジェクトを追加
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    const glRender = () => {        
      oribitControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(glRender);
    };

    // 描画
    glRender();
  }, []);

  return (
    <div css={styles.container}>
      <canvas css={styles.canvas} ref={canvasRef} />
    </div>
  );
};

export default Scene1;
