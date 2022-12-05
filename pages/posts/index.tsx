import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import type {InferGetStaticPropsType} from "next";

export default function Posts({data}: any) {
	return (
		<Layout>
			<Head>
				<title>Блог | Collars Lab.</title>
				<meta name="description" content="Блог про веб-исследования и код" />
				<link rel="canonical" href="https://collarslab.com/posts" />
			</Head>
			<Breadcrumbs list={[{title: "Блог", path: "/posts"}]} />
			<h1 className="page-header">Блог про веб-исследования и код</h1>
			{data.map(
				({userId, id, title, body}: {userId: number; id: number; title: string; body: string}) => {
					return (
						<article className="prose-lg" key={id}>
							<Link href={"/posts/" + id} className="mt-8">
								<h1 className="underline text-2xl">{title}</h1>
								<p>{body}</p>
								<span>Author: {userId}</span>
							</Link>
						</article>
					);
				}
			)}
		</Layout>
	);
}
export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts");
	const data = await res.json();
	return {
		props: {
			data: data,
		},
	};
}
