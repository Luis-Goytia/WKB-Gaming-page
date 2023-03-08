import {
  Box,
  OrbitControls,
  PresentationControls,
  ScrollControls,
  Sky,
  Stats,
  Text,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Bear } from './Bear';
import Camera from './Camera';
import Pyramid from './Pyramid';

export default function World() {
  return (
    <Canvas
      camera={{ fov: 20, position: [0, 10, 5] }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <color attach="background" args={['#000a07']} />
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Bear />
        <Text
          position={[0, 0, 1.5]}
          scale={[0.5, 0.5, 0.5]}
          color="white" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          Applications
        </Text>
      </ScrollControls>
      <Stats />
    </Canvas>
  );
}
