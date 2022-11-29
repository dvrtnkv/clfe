import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Дома | Collars Lab.</title>
				<meta name="description" content="Запросить жильё в аренду по параметрам" />
				<link rel="canonical" href="https://collarslab.com/houses" />
			</Head>
		</Layout>
	);
}
