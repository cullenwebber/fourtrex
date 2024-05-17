"use client";
import React, { useRef } from "react";
import styles from "@/styles/Services.module.css";
import { yapari } from "./fonts";
import Service from "./Service";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Services() {
	const service = useRef(null);
	const heading = useRef(null);
	const serviceImage = useRef(null);
	const serviceImageInner = useRef([]);

	const imageArray = [
		"hoverImage1.jpeg",
		"hoverImage2.jpeg",
		"hoverImage3.jpeg",
		"hoverImage4.jpeg",
	];

	const setHoverImage = (index) => {
		gsap.to(serviceImageInner.current[index], {
			scale: 1.05,
			opacity: 1,
			duration: 0.25,
			ease: "power2.out",
		});
		serviceImageInner.current.forEach((el, i) => {
			if (i !== index) {
				gsap.to(el, {
					scale: 1,
					opacity: 0,
					duration: 0.25,
					ease: "power2.out",
				});
			}
		});
	};

	useGSAP(() => {
		let scrollTl = gsap.timeline({
			scrollTrigger: {
				trigger: service.current,
				start: "top 60%",
			},
			defaults: {
				ease: "power2.out",
				duration: 0.5,
			},
		});

		scrollTl
			.from(heading.current, {
				opacity: 0,
				y: "2rem",
			})
			.from(".service", {
				opacity: 0,
				y: "2rem",
				stagger: 0.1,
			});
	});
	return (
		<section
			className={styles.services}
			ref={service}
			id="services"
			onMouseMove={(e) => {
				let xTo = gsap.quickTo(serviceImage.current, "x", {
						duration: 0.4,
						ease: "power3",
					}),
					yTo = gsap.quickTo(serviceImage.current, "y", {
						duration: 0.4,
						ease: "power3",
					});
				xTo(e.pageX);
				yTo(e.pageY);
			}}
		>
			<h2 style={yapari.style} ref={heading}>
				<span className={styles.accent}>Experienced </span>
				Workforce Skilled in Mining & Civil Piping Systems
			</h2>
			<div
				className={styles.serviceContainer}
				onMouseEnter={() => {
					gsap.to(serviceImage.current, {
						opacity: 1,
						duration: 0.5,
						ease: "power2.out",
					});
				}}
				onMouseLeave={() => {
					gsap.to(serviceImage.current, {
						opacity: 0,
						duration: 0.5,
						ease: "power2.in",
					});
				}}
			>
				<div className={styles.hoverImage} ref={serviceImage}>
					{imageArray.map((image, i) => {
						return (
							<Image
								ref={(el) => (serviceImageInner.current[i] = el)}
								src={"/images/" + image}
								alt={"image" + i}
								key={i}
								width={600}
								height={600}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									position: "absolute",
									top: "0",
									left: "0",
									opacity: "0",
								}}
							/>
						);
					})}
				</div>
				<Service
					title="Pipelines & Construction"
					para="
					We handle all aspects of pipeline design, management, supply, and installation.
				 Whether you need potable, raw, recycled or bulk water transfer, we can design a custom solution to meet your needs."
					className="service"
					onMouseEnter={() => {
						setHoverImage(0);
					}}
				/>
				<Service
					title="Borefields"
					para="Supply and installation of pipelines, bore pumps, headworks, starter panels, generators, and remote fuel cells."
					className="service"
					onMouseEnter={() => {
						setHoverImage(1);
					}}
				/>
				<Service
					title="water solutions"
					para="Expert dewatering services, designing and installing tailored systems to balance capital expenditure and ongoing costs. Our solutions include pontoon, skid-mounted, and trailer pumping systems, ensuring efficient and effective water management."
					className="service"
					onMouseEnter={() => {
						setHoverImage(2);
					}}
				/>
				<Service
					title="Civil & Earthworks"
					para="Small earthworks for mining, including trenching, road crossings, corridors, and culverts. Our services ensure efficient site preparation and infrastructure development to support your mining operations."
					className="service"
					onMouseEnter={() => {
						setHoverImage(3);
					}}
				/>
			</div>
		</section>
	);
}
