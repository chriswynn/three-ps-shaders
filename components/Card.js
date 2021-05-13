import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const Plane = ({ fragShader }) => {
  const uniforms = {
    u_resolution: {
      value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
  };

  const vertexShader = `
    varying vec3 vUv;

    void main() {
      vUv = position;
      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition;
    }
  `;

  return (
    <mesh position={[0, 0, 3]}>
      <planeBufferGeometry attach="geometry" args={[1.5, 2, 1]} />
      <shaderMaterial
        attach="material"
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragShader}
      />
    </mesh>
  );
};

const Card = ({ fragShader }) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        <Plane fragShader={fragShader} />
      </Canvas>
    </div>
  );
};

export default Card;
