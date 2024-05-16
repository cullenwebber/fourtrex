import React from "react";
import styles from "@/styles/Services.module.css";
import { yapari } from "./fonts";

export default function Service({ title, para, className, onMouseEnter }) {
	return (
		<div className={styles.service + " " + className} onMouseEnter={onMouseEnter}>
			<h4 style={yapari.style} className={className}>
				{title}
			</h4>
			<p className={styles.para + " " + className}>{para}</p>
		</div>
	);
}
