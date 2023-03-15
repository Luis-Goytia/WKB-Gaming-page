import * as THREE from 'three';
import React from 'react';

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
        <mesh
          //ref={appsref}
          geometry={nodes.Apps.geometry}
          material={materials['Apps']}
          position={[0, 0, 2.75]}
        >
          <Html
            scale={2}
            distanceFactor={1}
            transform
            occlude
            position={[0, 0, 0.25]}
          >
            <a href="/services/appgames">Applications</a>
          </Html>
        </mesh>
        <mesh
          //ref={desref}
          geometry={nodes.Design.geometry}
          material={materials['Design']}
          position={[2.75, 0, 0]}
        >
          <Html
            scale={2}
            distanceFactor={1}
            transform
            occlude
            position={[0.25, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
          >
            <a href="/services/ProductDesing">Product Design</a>
          </Html>
        </mesh>
        <mesh
          //ref={sportref}
          geometry={nodes.eSports.geometry}
          material={materials['eSports']}
          position={[0, 0, -2.75]}
        >
          <Html
            scale={2}
            distanceFactor={1}
            transform
            occlude
            position={[0, 0, -0.25]}
            rotation={[0, -Math.PI / 1, 0]}
          >
            <a href="/services/ProductDesing">e-Sports</a>
          </Html>
        </mesh>
        <mesh
          //ref={markref}
          geometry={nodes.Marketing.geometry}
          material={materials['Marketing']}
          position={[-2.5, 0, 0]}
        >
          <Html
            scale={2}
            distanceFactor={1}
            transform
            occlude
            position={[-0.4, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
          >
            <a href="/services/ProductDesing">Marketing & Communication</a>
          </Html>
        </mesh>

        <mesh
          geometry={nodes.Asteroids.geometry}
          material={materials['Asteroids']}
          scale={0.925}
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
