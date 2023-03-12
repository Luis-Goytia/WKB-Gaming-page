import * as THREE from 'three';

import {
  CameraShake,
  OrbitControls,
  PerspectiveCamera,
  Text,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useFrame, useThree } from '@react-three/fiber';

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 0.25, mouse.y * 0.25, camera.position.z),
      0.0125
    )
  );
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
}

export function WKBPlanet(props) {
  const { nodes, materials } = useGLTF('./Models/WKBPlanet.glb');
  const ref = useRef();
  const appsref = useRef();
  const desref = useRef();
  const sportref = useRef();
  const markref = useRef();

  useFrame(() => (ref.current.rotation.y += 0.001));
  useFrame(() => (appsref.current.rotation.y += 0.0025));
  useFrame(() => (desref.current.rotation.y += 0.0025));
  useFrame(() => (sportref.current.rotation.y += 0.0025));
  useFrame(() => (markref.current.rotation.y += 0.0025));
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        ref={appsref}
        geometry={nodes.Apps.geometry}
        material={materials['Apps']}
        position={[0, 0, 2.75]}
      />
      <mesh
        ref={desref}
        geometry={nodes.Design.geometry}
        material={materials['Design']}
        position={[2.75, 0, 0]}
      />
      <mesh
        ref={sportref}
        geometry={nodes.eSports.geometry}
        material={materials['eSports']}
        position={[0, 0, -2.75]}
      />
      <mesh
        ref={markref}
        geometry={nodes.Marketing.geometry}
        material={materials['Marketing']}
        position={[-2.75, 0, 0]}
      />

      <mesh
        geometry={nodes.Asteroids.geometry}
        material={materials['Asteroids']}
      />
      <mesh geometry={nodes.Bear.geometry} material={materials['Bear']} />

      <mesh geometry={nodes.Planet.geometry} material={materials['Planet']} />
    </group>
  );
}

useGLTF.preload('./Models/WKBPlanet.glb');
