import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Collars Lab.</title>
				<meta name="description" content="Веб-исследования и код" />
				<link rel="canonical" href="https://collarslab.com/" />
			</Head>
			<Breadcrumbs list={[{title: "Главная", path: "/"}]} />
			<article className="prose-lg">
				<h1>Главная страница</h1>
				<p>Я делаю сайты и ищу работу в офисе г. Екатеринбург</p>
			</article>
		</Layout>
	);
}
