import React from "react";

export default function Button({ link, text, className = "" }) {
	return (
		<a className={className + " btn"} href={link}>
			{text}
		</a>
	);
}
