import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export default function Layout({children}: {children: React.ReactNode}) {
	return (
		<main className="h-screen grid mobile-template lg:main-template font-sans antialiased">
			<Head>
				<meta charSet="utf-8" />
				<title>Collars Lab.</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Nav />
			<section className="page-content container px-8 pt-4">{children}</section>
			<Footer />
		</main>
	);
}
