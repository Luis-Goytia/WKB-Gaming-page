import { Box, OrbitControls, Sky, Stats } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Camera from './Camera';
import Pyramid from './Pyramid';

export default function World() {
  return (
    <Canvas
      colorManagement
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 2, 2] }}
    >
      <Sky />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
      <Stats />
      <OrbitControls />
    </Canvas>
  );
}
