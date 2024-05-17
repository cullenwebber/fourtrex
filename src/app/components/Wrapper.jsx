"use client";
import React, { useEffect, useRef } from "react";
import { neueMontreal } from "@/components/fonts";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

	useGSAP(() => {
		let loadTL = gsap.timeline({
			defaults: {
				duration: 0.5,
				ease: "power2.out",
			},
		});

		loadTL
			.to(".loadLogo", {
				opacity: 1,
				duration: 0.25,
				y: "-0.25rem"
			})
			.to(".loadLogo", {
				opacity: 0,
				delay: 0.75,
				duration: 0.25,
				y: "0rem"
			})
			.to(
				".loadScreen",
				{
					height: 0,
					ease: "power1.inOut",
				},
				
			)
			.from(
				"header, main, footer",
				{
					opacity: 0,
					ease: "power2.out",
				},
				"<50%"
			);
	});

	return (
		<body className={neueMontreal.className}>
			<div className="loadScreen">
				<div className="loadLogo"></div>
			</div>
			<ReactLenis
				root
				ref={lenisRef}
				options={lenisOptions}
				className="lenisWrapper"
			>
				{children}
			</ReactLenis>
		</body>
	);
}
