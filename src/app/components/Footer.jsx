"use client";

import React, { useEffect, useRef } from "react";
import styles from "@/styles/Footer.module.css";
import { yapari } from "./fonts";
import Image from "next/image";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
	const footerImage = useRef(null);
	const imageText = useRef(null);
	const logoContainer = useRef(null);
	const footerCarousel = useRef(null);
	const contactFooter = useRef(null);
	const innerFooter = useRef(null);
	const contactHeader = useRef(null);
	const contactPara = useRef(null);
	const footerMenu = useRef(null);
	

	useGSAP(() => {
		let scrollTl = gsap.timeline({
			scrollTrigger: {
				trigger: footerImage.current,
				start: "top 40%",
			},
			defaults: {
				ease: "power2.out",
				duration: 0.5,
			},
		});
		scrollTl
			.from(footerImage.current, {
				opacity: 0,
			})
			.from(imageText.current, {
				opacity: 0,
				y: "2rem",
			});

		let scrollTl2 = gsap.timeline({
			scrollTrigger: {
				trigger: logoContainer.current,
				start: "top 60%",
			},
			defaults: {
				ease: "power2.out",
				duration: 0.5,
			},
		});

		scrollTl2.from(".logoSvg path", {
			opacity: 0,
			yPercent: 100,
			stagger: 0.15,
		});

		let scrollTl3 = gsap.timeline({
			scrollTrigger: {
				trigger: contactFooter.current,
				start: "top bottom",
				end: "100px",
				scrub: true,
				onEnter: () => {
					if (window.matchMedia("(min-width: 992px)").matches) {
						gsap.to(innerFooter.current, {
							width: "calc(100% - 8rem)",
							borderRadius: "2rem",
						});
					}
					if (window.matchMedia("(max-width: 991px)").matches) {
						gsap.to(innerFooter.current, {
							width: "calc(100% - 4rem)",
							borderRadius: "2rem",
						});
					}

					if (window.matchMedia("(max-width: 576px)").matches) {
						gsap.to(innerFooter.current, {
							width: "calc(100% - 2rem)",
							borderRadius: "1rem",
						});
					}

					scrollTl4.play();
				},
				onLeaveBack: () => {
					gsap.to(innerFooter.current, {
						width: "100%",
						borderRadius: "0rem",
					});
				},
			},
			defaults: {
				ease: "none",
				duration: 1,
			},
		});

		let scrollTl4 = gsap
			.timeline({
				defaults: {
					ease: "power2.out",
					duration: 0.5,
				},
			})
			.pause();

		scrollTl4.from(
			[
				contactHeader.current,
				contactPara.current,
				".footerBtn",
				footerMenu.current,
			],
			{
				opacity: 0,
				y: "2rem",
				stagger: 0.25,
			}
		);
	});

	return (
		<footer className={styles.footer}>
			<div className={styles.innerFooter} ref={innerFooter}>
				<section className={styles.footerSection} ref={footerImage}>
					<div className={styles.footerSectionGradient}></div>
					<h5 style={yapari.style} className={styles.text} ref={imageText}>
						<span className={styles.accent}>Dedicated</span> to completing
						projects on-time
					</h5>
				</section>
				<section className={styles.logoText} ref={logoContainer}>
					<svg
						width="1304"
						height="114"
						viewBox="0 0 1304 114"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="logoSvg"
					>
						<path
							d="M0 114V0H140.966V29.925H30.2413V42.1167H137.126V71.8833H30.2413V114H0Z"
							fill="white"
						/>
						<path
							d="M266.636 114H186.313C181.406 114 176.766 113.103 172.392 111.308C168.125 109.408 164.339 106.875 161.032 103.708C157.832 100.436 155.272 96.6889 153.351 92.4667C151.538 88.1389 150.631 83.5472 150.631 78.6917V35.3083C150.631 30.4528 151.538 25.9139 153.351 21.6917C155.272 17.3639 157.832 13.6167 161.032 10.45C164.339 7.17777 168.125 4.64444 172.392 2.85C176.766 0.95 181.406 0 186.313 0H266.636C271.543 0 276.13 0.95 280.397 2.85C284.77 4.64444 288.557 7.17777 291.757 10.45C295.064 13.6167 297.624 17.3639 299.438 21.6917C301.358 25.9139 302.318 30.4528 302.318 35.3083V78.6917C302.318 83.5472 301.358 88.1389 299.438 92.4667C297.624 96.6889 295.064 100.436 291.757 103.708C288.557 106.875 284.77 109.408 280.397 111.308C276.13 113.103 271.543 114 266.636 114ZM272.076 67.925V46.075C272.076 43.8583 271.65 41.8 270.796 39.9C270.05 37.8944 268.93 36.1528 267.436 34.675C265.943 33.1972 264.236 32.0361 262.316 31.1917C260.396 30.3472 258.263 29.925 255.916 29.925H197.353C195.007 29.925 192.82 30.3472 190.793 31.1917C188.873 31.9306 187.113 33.0389 185.513 34.5167C184.019 35.9944 182.846 37.7361 181.993 39.7417C181.246 41.6417 180.873 43.7528 180.873 46.075V67.925C180.873 70.1417 181.246 72.2528 181.993 74.2583C182.846 76.1583 184.019 77.8472 185.513 79.325C187.006 80.8028 188.713 81.9639 190.633 82.8083C192.66 83.6528 194.847 84.075 197.193 84.075H255.596C258.049 84.075 260.236 83.6528 262.156 82.8083C264.183 81.9639 265.943 80.8028 267.436 79.325C268.93 77.8472 270.05 76.1583 270.796 74.2583C271.65 72.2528 272.076 70.1417 272.076 67.925Z"
							fill="white"
						/>
						<path
							d="M438.177 0.158331H468.419V78.5333C468.419 83.3889 467.458 87.9806 465.538 92.3083C463.725 96.6361 461.165 100.436 457.858 103.708C454.658 106.875 450.871 109.408 446.498 111.308C442.231 113.103 437.591 114 432.577 114H352.574C347.667 114 343.027 113.103 338.653 111.308C334.28 109.408 330.439 106.875 327.133 103.708C323.932 100.436 321.372 96.6361 319.452 92.3083C317.639 87.9806 316.732 83.3889 316.732 78.5333V0.158331H346.973V67.925C346.973 70.2472 347.4 72.4111 348.253 74.4167C349.107 76.3167 350.28 78.0056 351.774 79.4833C353.267 80.9611 354.974 82.1222 356.894 82.9667C358.921 83.7055 361.054 84.075 363.294 84.075H421.697C424.043 84.075 426.177 83.7055 428.097 82.9667C430.124 82.1222 431.884 80.9611 433.377 79.4833C434.87 78.0056 436.044 76.3167 436.897 74.4167C437.751 72.4111 438.177 70.2472 438.177 67.925V0.158331Z"
							fill="white"
						/>
						<path
							d="M632.599 114H595.638L572.757 81.0667H513.074V114H482.833V0H598.678C603.691 0 608.332 0.897223 612.598 2.69167C616.972 4.48611 620.759 6.86111 623.959 9.81666C627.266 12.7722 629.826 16.2028 631.639 20.1083C633.559 23.9083 634.519 27.8139 634.519 31.825V48.45C634.519 51.8278 633.773 55.2583 632.279 58.7417C630.892 62.225 628.972 65.4444 626.519 68.4C624.172 71.3556 621.399 73.8889 618.199 76C615.105 78.0055 611.905 79.325 608.598 79.9583L632.599 114ZM604.278 41.325V39.1083C604.278 37.9472 604.011 36.8389 603.478 35.7833C602.945 34.6222 602.145 33.6194 601.078 32.775C600.011 31.9306 598.731 31.2444 597.238 30.7167C595.851 30.1889 594.198 29.925 592.278 29.925H513.074V51.1417H592.278C594.411 51.1417 596.224 50.8778 597.718 50.35C599.211 49.8222 600.438 49.0833 601.398 48.1333C602.358 47.1833 603.051 46.1278 603.478 44.9667C604.011 43.8055 604.278 42.5917 604.278 41.325Z"
							fill="white"
						/>
						<path
							d="M799.259 0V29.925H737.176V114H706.935V29.925H645.652V0H799.259Z"
							fill="white"
						/>
						<path
							d="M963.394 114H926.433L903.552 81.0667H843.869V114H813.628V0H929.473C934.487 0 939.127 0.897223 943.394 2.69167C947.767 4.48611 951.554 6.86111 954.754 9.81666C958.061 12.7722 960.621 16.2028 962.434 20.1083C964.354 23.9083 965.314 27.8139 965.314 31.825V48.45C965.314 51.8278 964.568 55.2583 963.074 58.7417C961.688 62.225 959.768 65.4444 957.314 68.4C954.967 71.3556 952.194 73.8889 948.994 76C945.9 78.0055 942.7 79.325 939.393 79.9583L963.394 114ZM935.073 41.325V39.1083C935.073 37.9472 934.807 36.8389 934.273 35.7833C933.74 34.6222 932.94 33.6194 931.873 32.775C930.806 31.9306 929.526 31.2444 928.033 30.7167C926.646 30.1889 924.993 29.925 923.073 29.925H843.869V51.1417H923.073C925.206 51.1417 927.02 50.8778 928.513 50.35C930.006 49.8222 931.233 49.0833 932.193 48.1333C933.153 47.1833 933.846 46.1278 934.273 44.9667C934.807 43.8055 935.073 42.5917 935.073 41.325Z"
							fill="white"
						/>
						<path
							d="M979.729 114V0H1124.53V29.925H1009.97V42.1167H1120.69V71.8833H1009.97V84.075H1124.53V114H979.729Z"
							fill="white"
						/>
						<path
							d="M1177.75 114H1135.67L1192.64 57L1135.67 0H1177.91L1214.72 36.575H1224.96L1261.76 0H1304L1247.04 57L1304 114H1261.76L1224.8 77.2667H1214.88L1177.75 114Z"
							fill="white"
						/>
					</svg>
				</section>
			</div>
			<section
				className={styles.contactFooter}
				ref={contactFooter}
				id="contact"
			>
				<h5 style={yapari.style} ref={contactHeader}>
					get in contact
				</h5>
				<div className={styles.contactInner}>
					<p ref={contactPara}>
						Fourtrex Engineering Pty Ltd endeavours to deliver a safe, reliable,
						and efficient workforce, striving to establish a mutually beneficial
						relationship with our clientele.
					</p>
					<div className={styles.buttonGroup}>
						<Button
							link="mailto:admin@fourtrexengineering.com.au"
							text="admin@fourtrexengineering.com.au"
							className={styles.button + " footerBtn"}
						/>
						<Button
							link="tel:0472522573"
							text="0472 522 573"
							className={styles.button + " footerBtn"}
						/>
					</div>
				</div>
				<div className={styles.menuScroll} ref={footerMenu}>
					<Button link="/" text="Home" />
					<Button link="#about" text="About" />
					<Button link="#services" text="Services" />
					<Button link="#contact" text="Contact" />
				</div>
			</section>
		</footer>
	);
}
