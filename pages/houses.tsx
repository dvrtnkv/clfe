import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Footer from "../components/footer";
import Header from "../components/header";
import Nav from "../components/nav";
import styles from "../styles/Home.module.css";

export default function Houses() {
	return (
		<div className={styles.container}>
			<Head>
				<meta charSet="utf-8" />
				<title>Houses | Collars Lab.</title>
				<meta name="description" content="Запросить жильё в аренду по параметрам" />
				<link rel="canonical" href="https://collarslab.com/houses" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<Header />
				<Nav />
			</main>
			<Footer />
		</div>
	);
}
