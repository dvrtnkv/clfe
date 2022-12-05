import Head from "next/head";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Portal() {
	return (
		<Layout>
			<Head>
				<title>Портал | Collars Lab.</title>
				<meta name="description" content="Портал" />
				<link rel="canonical" href="https://collarslab.com/portal" />
			</Head>
			<Breadcrumbs list={[{title: "Портал", path: "/portal"}]} />
			<h1 className="page-header">Портал</h1>
		</Layout>
	);
}
