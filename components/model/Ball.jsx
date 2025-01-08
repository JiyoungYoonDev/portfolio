import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { useState } from "react";
import { MeshStandardMaterial, SphereGeometry } from "three";

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);
	const [hovered, hover] = useState(false);

	return (
		<Float speed={2.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh
				castShadow
				receiveShadow
				scale={2.75}
				onPointerOut={() => hover(false)}
				onPointerOver={(e) => (e.stopPropagation(), hover(true))}>
				<icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial 
                    color={hovered ? "#aad9f3" : "#7493d5"}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
				<Decal
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					scale={1}
					map={decal}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas dpr={[1, 2]}>
			<Suspense fallback={null}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
export default BallCanvas;
