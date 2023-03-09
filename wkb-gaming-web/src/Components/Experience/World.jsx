import * as THREE from 'three';

import {
  Box,
  CameraShake,
  OrbitControls,
  PresentationControls,
  ScrollControls,
  Sky,
  Stats,
  Text,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bear } from './Bear';
import { Rocks } from './Rocks';
import Camera from './Camera';
import Pyramid from './Pyramid';
import { useState } from 'react';

function Rig() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() =>
    camera.position.lerp(vec.set(mouse.x * 0.25, mouse.y * 0.25, 5), 0.0125)
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

export default function World() {
  return (
    <Canvas
      camera={{ fov: 20, position: [0, 0, 0], rotation: [0, 0, 0] }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <color attach="background" args={['#000a07']} />
      <ambientLight intensity={1.75} />
      <pointLight position={[5, 10, 0]} scale={[5, 5, 5]} />
      <fog attach="fog" args={['lightpink', 60, 100]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={5} damping={0.25}>
        <Rig />
        <Rocks />
      </ScrollControls>
      <Stats />
    </Canvas>
  );
}
