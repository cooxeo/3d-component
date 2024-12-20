import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./style.css";
import Scene from "./Scene";

function App() {
  return (
    <>
      <Canvas camera={{ fov: 80 }}>
        <OrbitControls />
        <ambientLight />
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
