import Head from "next/head";
import Layout from "../components/Layout";

export default function Service() {
	return (
		<Layout>
			<Head>
				<title>Услуги | Collars Lab.</title>
				<meta name="description" content="Услуги" />
				<link rel="canonical" href="https://collarslab.com/service" />
			</Head>
			<h1 className="page-header">Услуги</h1>
		</Layout>
	);
}
