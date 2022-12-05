import Head from "next/head";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Shop() {
	return (
		<Layout>
			<Head>
				<title>Магазин | Collars Lab.</title>
				<meta name="description" content="Интернет-магазин" />
				<link rel="canonical" href="https://collarslab.com/shop" />
			</Head>
			<Breadcrumbs list={[{title: "Магазин", path: "/shop"}]} />
			<h1 className="page-header">Интернет-магазин</h1>
		</Layout>
	);
}
