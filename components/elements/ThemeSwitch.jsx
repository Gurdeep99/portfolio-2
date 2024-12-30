'use client'
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
	const [theme, setTheme] = useState(() => {
		// Use initial state function to avoid SSR issues
		return (typeof localStorage !== "undefined" && localStorage.getItem("theme")) || "dark";
	});

	useEffect(() => {
		// Set theme on mount
		if (typeof localStorage !== "undefined") {
			const savedTheme = localStorage.getItem("theme") || "dark";
			setTheme(savedTheme);
			document.documentElement.setAttribute("data-bs-theme", savedTheme);
		}
	}, []);

	useEffect(() => {
		// Update theme in localStorage and HTML attribute
		if (typeof localStorage !== "undefined") {
			localStorage.setItem("theme", theme);
		}
		document.documentElement.setAttribute("data-bs-theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<div
			className="dark-light-switcher pe-10 pe-lg-0 pe-0 ps-md-5 ps-0 ps-lg-4 pe-lg-4 d-flex justify-content-center align-items-center icon_80"
			onClick={toggleTheme}
			style={{ cursor: "pointer" }}
		>
			{theme == "dark" && <i className="bi theme-icon ri-sun-line text-warning" />}
			{theme == "light" && <i className="bi theme-icon ri-contrast-2-line text-white" />}
		</div>
	);
}
