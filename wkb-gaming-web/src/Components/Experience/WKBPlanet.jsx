import * as THREE from 'three';

import {
  CameraShake,
  Html,
  OrbitControls,
  PerspectiveCamera,
  Text,
  useGLTF,
  useScroll,
} from '@react-three/drei';
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useFrame, useThree } from '@react-three/fiber';

export function WKBPlanet(props) {
  const { nodes, materials } = useGLTF('./Models/WKBPlanet.glb');
  //const appsref = useRef();
  const desref = useRef();
  const sportref = useRef();
  const markref = useRef();

  //useFrame(() => (appsref.current.rotation.y += 0.0025));
  useFrame(() => (desref.current.rotation.y += 0.0025));
  useFrame(() => (sportref.current.rotation.y += 0.0025));
  useFrame(() => (markref.current.rotation.y += 0.0025));

  return (
    <group>
      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <CameraShake
        maxYaw={0.1} // Max amount camera can yaw in either direction
        maxPitch={0.1} // Max amount camera can pitch in either direction
        maxRoll={0.1} // Max amount camera can roll in either direction
        yawFrequency={0.1} // Frequency of the the yaw rotation
        pitchFrequency={0.1} // Frequency of the pitch rotation
        rollFrequency={0.1} // Frequency of the roll rotation
        intensity={1} // initial intensity of the shake
        decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
      />
      <group {...props} dispose={null}>
        <Text position={[0, 0, 3.05]} scale={[0.05, 0.05, 0.05]}>
          Applications
        </Text>

        <mesh
          //ref={appsref}
          geometry={nodes.Apps.geometry}
          material={materials['Apps']}
          position={[0, 0, 2.75]}
        >
          <Html
            scale={100}
            rotation={[Math.PI * 0.2, Math.PI * 0, Math.PI * 0]}
            transform
            occlude
            position={[50, 100, 0]}
          >
            <h1>Hola mundastico</h1>
          </Html>
        </mesh>
        <Text
          position={[3.05, 0, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
          scale={[0.05, 0.05, 0.05]}
        >
          Product Design
        </Text>
        <mesh
          ref={desref}
          geometry={nodes.Design.geometry}
          material={materials['Design']}
          position={[2.75, 0, 0]}
        />
        <Text
          position={[0, 0, -3.05]}
          rotation={[0, Math.PI, 0]}
          scale={[0.05, 0.05, 0.05]}
        >
          eSports
        </Text>
        <mesh
          ref={sportref}
          geometry={nodes.eSports.geometry}
          material={materials['eSports']}
          position={[0, 0, -2.75]}
        />
        <Text
          position={[-3.075, 0, 0]}
          rotation={[0, Math.PI * 1.5, 0]}
          scale={[0.05, 0.05, 0.05]}
        >
          Marketing
        </Text>
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

        <mesh
          geometry={nodes.Planet.geometry}
          castShadow
          material={materials['Planet']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('./Models/WKBPlanet.glb');
