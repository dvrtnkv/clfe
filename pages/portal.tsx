import Head from "next/head";
import Layout from "../components/Layout";

export default function Portal() {
	return (
		<Layout>
			<Head>
				<title>Портал | Collars Lab.</title>
				<meta name="description" content="Портал" />
				<link rel="canonical" href="https://collarslab.com/portal" />
			</Head>
			<h1 className="page-header">Портал</h1>
		</Layout>
	);
}
