import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Header() {
	return (
		<div className={`${styles.header} text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}>
			<h1 className={`${styles.title}`}>Collars Lab.</h1>
			<div className={`${styles.prefix}`}>JS</div>
			<h2 className={`${styles.title}`}>Software</h2>
		</div>
	);
}