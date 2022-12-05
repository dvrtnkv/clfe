import Head from "next/head";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Service() {
	return (
		<Layout>
			<Head>
				<title>Услуги | Collars Lab.</title>
				<meta name="description" content="Услуги" />
				<link rel="canonical" href="https://collarslab.com/service" />
			</Head>
			<Breadcrumbs list={[{title: "Услуги", path: "/service"}]} />
			<h1 className="page-header">Услуги</h1>
		</Layout>
	);
}
