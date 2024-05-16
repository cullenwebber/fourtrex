"use client";
import React, { useRef } from "react";
import styles from "@/styles/About.module.css";
import { yapari } from "./fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
	const about = useRef(null);
	const para = useRef(null);
	const heading = useRef(null);
	const container = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		let scrollTl = gsap.timeline({
			scrollTrigger: {
				trigger: about.current,
				start: "top 60%",
			},
			defaults: {
				ease: "power2.out",
				duration: 0.5,
			},
		});

		scrollTl.from([heading.current, para.current], {
			opacity: 0,
			y: "2rem",
			stagger: 0.25,
		});

		let sections = gsap.utils.toArray(".panel");

		const horizontalScroll = gsap
			.timeline({
				scrollTrigger: {
					trigger: container.current,
					pin: true,
					scrub: true,
					end: "150%"
				},
			})
			.to(sections, {
				delay: 0.25,
				xPercent: -100 * (sections.length - 1),
				ease: "none",
			});

		sections.forEach((section, index) => {
			gsap.from(section.querySelectorAll("h5, p"), {
				opacity: 0,
				y: "2rem",
				stagger: 0.25,
				ease: "power2.out",
				scrollTrigger: {
					trigger: section,
					start: index === 0 ? "center center" : "left center",
					containerAnimation: horizontalScroll,
				},
			});
		});
	});
	return (
		<>
			<section className={styles.about} id="about" ref={about}>
				<div className={styles.aboutInner}>
					<h3 style={yapari.style} ref={heading}>
						Who we are
					</h3>
					<p className={styles.paragraph} ref={para}>
						Fourtrex Engineering Pty Ltd is a Piping and Civil Engineering
						contracting company which specialise in an extensive range of HDPE
						systems. Located in both Kalgoorlie and Perth, Western Australia, we
						are situated to provide a responsive and trouble-free service,
						ensuring client downtime is kept to a minimum.
					</p>
				</div>
			</section>
			<section className={styles.panelContainer} ref={container}>
				<div className={styles.panel + " panel"}>
					<Image
						src="/images/civil.jpeg"
						alt="Civil Sector"
						width={0}
						height={0}
						sizes="100vw"
						className={styles.image}
					/>
					<div className={styles.gradient}></div>
					<p className={styles.p}>
						Fourtrex Engineering Pty Ltd is a Piping and Civil Engineering
						contracting company which specialise in an extensive range of HDPE
						systems. Located in both Kalgoorlie and Perth, Western Australia, we
						are situated to provide a responsive and trouble-free service,
						ensuring client downtime is kept to a minimum.
					</p>
					<h5 style={yapari.style} className={styles.h5}>
						Civil Sector
					</h5>
				</div>
				<div className={styles.panel + " panel"}>
					<Image
						src="/images/about.jpeg"
						alt="Mining Sector"
						width={0}
						height={0}
						sizes="100vw"
						className={styles.image}
					/>
					<div className={styles.gradient}></div>
					<p className={styles.p}>
						Fourtrex Engineering Pty Ltd is a Piping and Civil Engineering
						contracting company which specialise in an extensive range of HDPE
						systems. Located in both Kalgoorlie and Perth, Western Australia, we
						are situated to provide a responsive and trouble-free service,
						ensuring client downtime is kept to a minimum.
					</p>
					<h5 style={yapari.style} className={styles.h5}>
						Mining Sector
					</h5>
				</div>
			</section>
		</>
	);
}
