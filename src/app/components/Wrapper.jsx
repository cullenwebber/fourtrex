"use client";
import React, { useEffect, useRef } from "react";
import { neueMontreal } from "@/components/fonts";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";

export default function Wrapper({ children }) {
	const lenisRef = useRef();

	const lenisOptions = {
		lerp: 0.2,
		duration: 1,
	};

	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}

		gsap.ticker.add(update);
		gsap.ticker.lagSmoothing(0);

		return () => {
			gsap.ticker.remove(update);
		};
	});


	return (
		<body className={neueMontreal.className}>
			<ReactLenis root ref={lenisRef} options={lenisOptions}>
				{children}
			</ReactLenis>
		</body>
	);
}
