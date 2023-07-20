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

const Scene3 = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const cubeRef = React.useRef<THREE.Mesh>();
  const cameraRef = React.useRef<THREE.PerspectiveCamera>();

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
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(60, 1.0);
    camera.aspect = width / height;
    camera.position.set(0, 0, 10);
    camera.updateProjectionMatrix();
    cameraRef.current = camera;

    // カメラを制御するコントローラを作成
    let oribitControls = new OrbitControls(camera, canvas);
    oribitControls.target = new Vector3(0, 0, 0);
    oribitControls.minDistance = 2.0;
    oribitControls.maxDistance = 50.0;

    // Cubeオブジェクトを追加
    const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
    cubeRef.current = new THREE.Mesh( geometry, material );
    scene.add( cubeRef.current );

    // 球体を追加
    const sphereGeometry =  new THREE.SphereGeometry(1.0, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
    sphere.position.set(3, 3, 3);
    scene.add(sphere);

    const glRender = () => {        
      oribitControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(glRender);
    };

    // 描画
    glRender();
  }, []);

  const onCanvasClicked = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (cameraRef.current === undefined || cubeRef.current === undefined || canvasRef.current === null) return;
    // クリックしたビューポートの座標を取得
    let clickPoint = new THREE.Vector2(0, 0);
    clickPoint.x = ( event.clientX / canvasRef.current.clientWidth ) * 2 - 1;
    clickPoint.y = - ( event.clientY / canvasRef.current.clientHeight ) * 2 + 1;
    // クリックした点を通してカメラ方向からrayをキャストする
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( clickPoint, cameraRef.current );
    const intersects = raycaster.intersectObjects( [ cubeRef.current ], false );
    // 当たったものに対する処理
    if ( intersects.length > 0 ) {
      const intersect = intersects[0];
      const targetMaterial = (intersect.object as THREE.Mesh).material as THREE.MeshBasicMaterial;
      const currentColor = targetMaterial.color.getHex();
      targetMaterial.color = new THREE.Color((currentColor << 8) | (currentColor >> (24 - 8)));
    }
  };

  return (
    <div css={styles.container}>
      <canvas css={styles.canvas} ref={canvasRef} onClick={onCanvasClicked}/>
    </div>
  );
};

export default Scene3;
