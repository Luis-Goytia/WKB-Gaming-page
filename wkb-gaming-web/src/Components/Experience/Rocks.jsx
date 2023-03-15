import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
import React from 'react';

export const FLOOR_HEIGHT = 5;
export const NB_FLOORS = 5;

export function Rocks(props) {
  const { nodes, materials } = useGLTF('./Models/Rocks.glb');
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
        duration: 3,
        x: -FLOOR_HEIGHT * (NB_FLOORS - 1),
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
        scale={[1, 1, 1]}
      />
      <Text position={[0, 0, 1]} scale={[0.25, 0.25, 0.25]}>
        Applications
      </Text>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['Material.001']}
        position={[5, 0, 0]}
        scale={[1, 1, 1]}
      />
      <Text position={[5, 0, 1]} scale={[0.25, 0.25, 0.25]}>
        Digital Product Design
      </Text>
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials['Material.002']}
        position={[10, 0, 0]}
        scale={[1, 1, 1]}
      />
      <Text position={[10, 0, 1]} scale={[0.25, 0.25, 0.25]}>
        Marketing & Communication
      </Text>
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials['Material.003']}
        position={[15, 0, 0]}
        scale={[1, 1, 1]}
      />
      <Text position={[15, 0, 1]} scale={[0.25, 0.25, 0.25]}>
        e-Sports Services
      </Text>
    </group>
  );
}

useGLTF.preload('./Models/Rocks.glb');
