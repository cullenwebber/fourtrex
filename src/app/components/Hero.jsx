"use client";
import React, { useRef } from "react";
import styles from "@/styles/Hero.module.css";
import { yapari } from "./fonts";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Hero() {
	const hero = useRef(null);
	const heroImage = useRef(null);
	const heroImageInner = useRef(null);

	const textTop = useRef(null);
	const textCenter = useRef(null);
	const textBottom = useRef(null);

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		let loadTl = gsap.timeline({
			defaults: {
				duration: 0.5,
				ease: "power2.out",
			},
		});

		let scrollTl = gsap.timeline({
			scrollTrigger: {
				trigger: hero.current,
				start: "top top",
				end: "50%",
				pin: true,
				scrub: true,

				onLeave: () => {
					gsap.to(".fourtrexText", {
						opacity: 0,
						duration: 0.25,
						ease: "power2.out",
					});
					gsap.to(".fourtrexSmall", {
						yPercent: 100,
						opacity: 0,
						duration: 0.25,
						ease: "power2.out",
					});
				},
				onEnterBack: () => {
					gsap.to(".fourtrexText", {
						opacity: 1,
						duration: 0.25,
						ease: "power2.out",
					});
					gsap.to(".fourtrexSmall", {
						yPercent: 0,
						opacity: 1,
						duration: 0.25,
						ease: "power2.out",
					});
				},
			},
			defaults: {
				ease: "power2.out",
			},
		});
		scrollTl
			.to(textTop.current, {
				xPercent: -25,
				opacity: 0,
			})
			.to(
				textCenter.current,
				{
					opacity: 0,
				},
				"<"
			)
			.to(
				textBottom.current,
				{
					xPercent: 25,
					opacity: 0,
				},
				"<"
			)
			.to(
				".heroBtn",
				{
					yPercent: -25,
					opacity: 0,
					stagger: 0.25,
				},
				"<"
			);
		let scrollTl2 = gsap.timeline({
			scrollTrigger: {
				trigger: heroImage.current,
				start: "top top",
				pin: true,
				pinSpacing: false,
				scrub: true,
			},
			defaults: {
				ease: "power1.in",
			},
		});
		scrollTl2
			.to(heroImageInner.current, {
				width: "150lvw",
				height: "150lvh",
				ease: "none",
			})
			.to(
				heroImageInner.current,
				{
					opacity: 0,

					ease: "power2.in",
				},
				"<"
			);
	});

	return (
		<>
			<div className={styles.heroImage} ref={heroImage}>
				<div className={styles.heroImageInner} ref={heroImageInner}>
					<div className={styles.heroGradient}></div>
				</div>
			</div>
			<section className={styles.hero + " hero"} ref={hero}>
				<div className={styles.heroContainer}>
					<h1 style={yapari.style}>
						<div className={styles.accent} ref={textTop}>
							Engineering
						</div>
						<div ref={textCenter}>Tailored piping</div>
						<div ref={textBottom}>Solutions</div>
					</h1>
					<div className={styles.buttonGroup}>
						<Button
							link="tel:0472522573"
							text="0472 522 573"
							className="heroBtn"
						/>
						<Button
							link="mailto:admin@fourtrexengineering.com.au"
							text="admin@fourtrexengineering.com.au"
							className="heroBtn"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
