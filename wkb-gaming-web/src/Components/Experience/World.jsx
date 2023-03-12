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
import { Suspense, useRef, useState } from 'react';
import './World.module.css';
import { WKBPlanet } from './WKBPlanet';
import Overlay from './OverlayWorld';

export default function World() {
  const overlay = useRef();
  const caption = useRef();
  const scroll = useRef(0);
  return (
    <>
      <h1>WKB GAMING</h1>
      <Canvas
        dpr={[0.5, 15]}
        shadows
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        <fog attach="fog" args={['#272730', -1.75, 7]} />
        <ambientLight intensity={0.75} />

        <Environment preset="night" />
        <Suspense fallback={null}>
          <WKBPlanet />
        </Suspense>
        <PerspectiveCamera
          makeDefault
          position={[0.25, 0, 3.5]}
          rotation={[0, 0, 0.25]}
          fov={60}
        >
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
        <Stars radius={500} depth={50} count={350} factor={10} />
      </Canvas>
      <div className="layer" />
    </>
  );
}
