import { SpotLight } from '@react-three/drei';

export default function Godrays() {
  return (
    <>
      <SpotLight
        castShadow
        position={[-4, 5, 2]}
        color={'#00ffa6'}
        distance={10}
        angle={0.5}
        attenuation={8}
        anglePower={10}
        intensity={0.5}
      />
      <SpotLight
        castShadow
        position={[3, 5, -3]}
        color={'#b700ff'}
        distance={10}
        angle={0.5}
        attenuation={8}
        anglePower={10}
        intensity={0.5}
      />
    </>
  );
}
