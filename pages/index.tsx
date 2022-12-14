import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<Head>
				<title>Collars Lab.</title>
				<meta name="description" content="Веб-исследования и код" />
				<link rel="canonical" href="https://collarslab.com/" />
			</Head>
			<article className="prose-lg">
				<h1 className="page-header">Главная страница</h1>
				<p>Пишу код и ищу работу в офисе г. Екатеринбург</p>
			</article>
		</Layout>
	);
}
