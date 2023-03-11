import { Text, useGLTF, useScroll } from '@react-three/drei';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export function WKBPlanet(props) {
  const { nodes, materials } = useGLTF('./Models/WKBPlanet.glb');
  const ref = useRef();
  const tl = useRef();

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.Apps.geometry} material={materials['Apps']} />
      <mesh
        geometry={nodes.Asteroids.geometry}
        material={materials['Asteroids']}
      />
      <mesh geometry={nodes.Bear.geometry} material={materials['Bear']} />
      <mesh geometry={nodes.Design.geometry} material={materials['Design']} />
      <mesh geometry={nodes.eSports.geometry} material={materials['eSports']} />
      <mesh
        geometry={nodes.Marketing.geometry}
        material={materials['Marketing']}
      />
      <mesh geometry={nodes.Planet.geometry} material={materials['Planet']} />
    </group>
  );
}

useGLTF.preload('./Models/WKBPlanet.glb');
