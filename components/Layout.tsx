import Head from "next/head";
import Nav from "../components/Nav";
import Header from "components/Header";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";

export default function Layout({children}: {children: React.ReactNode}) {
	return (
		<div className={styles.container}>
			<Head>
				<meta charSet="utf-8" />
				<title>Collars Lab.</title>
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
				{children}
			</main>
			<Footer />
		</div>
	);
}
