import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { getImageUrl } from "../utils/image-util";

function Model() {
  const { scene } = useGLTF(getImageUrl("chess", "glb"));

  useFrame((state, delta) => {
    scene.rotation.y += delta * 0.2;
  });

  return <primitive object={scene} scale={1.5} />;
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas gl={{ alpha: true }} camera={{ position: [20, 5, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <Model />
      </Canvas>
    </div>
  );
}
