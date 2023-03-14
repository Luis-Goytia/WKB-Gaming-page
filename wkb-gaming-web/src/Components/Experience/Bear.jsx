import { useGLTF, useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Bear(props) {
  const { nodes, materials } = useGLTF('./Models/WalkerBear.glb');
  const ref = useRef();
  const tl = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    //ANIMACION VERTICAL
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        x: FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );
  }, []);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials['Material']}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload('./Models/WalkerBear.glb');
