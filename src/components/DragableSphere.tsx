/** @jsxImportSource @emotion/react */
import React from "react";
import * as Fiber from '@react-three/fiber';
import * as Drei from '@react-three/drei';

type DragableSphereProps = {
  radius: number,
  position?: Fiber.Vector3,
  onDrag?: (event: Fiber.ThreeEvent<PointerEvent>) => void,
  onDragStart?: () => void;
  onDragEnd?: () => void;
};

const DragableSphere = (props: DragableSphereProps) => {
  const isDragRef = React.useRef(false);

  const onClick = (event: Fiber.ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
  };

  const onDrag = (event: Fiber.ThreeEvent<PointerEvent>) => {
    if (isDragRef.current === false) return;
    event.stopPropagation();
    if (props.onDrag) props.onDrag(event);
  };

  const onDragStart = (event: Fiber.ThreeEvent<PointerEvent>) => {
    if (isDragRef.current === true) return;
    isDragRef.current = true;
    event.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
    const anyEvent = event as any;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,  @typescript-eslint/no-unsafe-call
    anyEvent.target.setPointerCapture(event.sourceEvent.pointerId);
    if (props.onDragStart) props.onDragStart();
  };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  const onDragEnd = (event: any) => {
    if (isDragRef.current === false) return;
    isDragRef.current = false;
    event.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    event.target.releasePointerCapture(event.sourceEvent.pointerId);
    if (props.onDragEnd) props.onDragEnd();
  };

  return (
    <Drei.Sphere position={props.position} args={[props.radius, 32, 32]}
      onPointerMove={onDrag} onPointerUp={onDragEnd} 
      onPointerDown={onDragStart} onClick={onClick}>
      <meshBasicMaterial color="white"/>
    </Drei.Sphere>
  );
};

export default DragableSphere;
