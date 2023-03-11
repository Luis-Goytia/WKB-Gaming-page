import * as THREE from 'three';

import {
  Box,
  CameraShake,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  ScrollControls,
  Sky,
  Stage,
  Stars,
  Stats,
  Text,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Bear } from './Bear';
import { Rocks } from './Rocks';
import Camera from './Camera';
import Pyramid from './Pyramid';
import { Suspense, useState } from 'react';
import './World.module.css';
import { WKBPlanet } from './WKBPlanet';

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

export default function World() {
  return (
    <>
      <h1>WKB GAMING</h1>
      <Canvas dpr={[0.5, 15]} shadows>
        <fog attach="fog" args={['#272730', -2, 10]} />
        <ambientLight intensity={0.75} />
        <PerspectiveCamera makeDefault position={[0, 0, 3.75]} fov={60}>
          <pointLight intensity={2} position={[-10, -25, -10]} />
          <spotLight
            castShadow
            intensity={5}
            angle={0.2}
            penumbra={1}
            position={[-25, 20, -15]}
            shadow-mapSize={[1024, 1024]}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
        <Environment preset="night" />
        <Suspense fallback={null}>
          <WKBPlanet />
        </Suspense>
        <OrbitControls
          autoRotate
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stars radius={500} depth={50} count={350} factor={10} />
      </Canvas>
      <div className="layer" />
    </>
  );
}
