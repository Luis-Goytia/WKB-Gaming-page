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
import Godrays from './Godrays';
import { Link } from 'react-router-dom';

export default function World() {
  return (
    <>
      <h1>WKB GAMING</h1>
      <Canvas
        dpr={[1.5, 5]}
        linear
        shadows
        camera={{ position: [0, 0, 3.25], rotation: [5, 0, 5], fov: 75 }}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        <fog attach="fog" args={['#021129', -1.75, 7]} />
        <ambientLight intensity={1} />
        <Environment preset="night" />
        <pointLight color={'#00ffa6'} intensity={2} position={[-10, 25, -10]} />
        <spotLight
          color={'#e100ff'}
          castShadow
          intensity={2.25}
          angle={8}
          penumbra={1}
          position={[25, 20, 15]}
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        <Suspense fallback={null}>
          <Stats />

          <Godrays />
          <WKBPlanet contactShadow={{ opacity: 1, blur: 2 }} />
        </Suspense>
        <Stars radius={500} depth={50} count={350} factor={10} />
      </Canvas>
    </>
  );
}
