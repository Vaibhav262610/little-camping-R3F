import { OrbitControls, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Experience from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import UI from "./components/UI";

const App = () => {
  return (
    <>
      <div className="main">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
          <fog attach="fog" args={["#171720", 10, 30]} />
          <color attach="background" args={["#171720"]} />
          <Suspense>
            <Experience />
          </Suspense>
          <EffectComposer>
            <Bloom mipmapBlur intensity={1.2} />
          </EffectComposer>
        </Canvas>
      </div>
      {/* <UI /> */}
    </>
  );
};

export default App;
