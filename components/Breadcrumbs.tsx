import Link from "next/link";
import {useRouter} from "next/router";

export default function Breadcrumbs(props: any) {
	const router = useRouter();

	return (
		<nav className="bg-gray-100 px-5 py-3 mb-4 rounded-md w-full">
			<ol className="list-reset flex items-center">
				{router.pathname !== "/" && (
					<li>
						<Link href="/" className="hover:text-blue-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-6 h-6">
								<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
								<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
							</svg>
						</Link>
					</li>
				)}
				{router.pathname == "/" && (
					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6">
							<path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
							<path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
						</svg>
					</li>
				)}
				<li>
					<span className="text-gray-500 mx-2">/</span>
				</li>
				{Object.keys(props.list).length == 1 && (
					<li className="text-gray-500">{props.list[0].title}</li>
				)}
				{Object.keys(props.list).length >= 2 && (
					<>
						<li>
							<Link href={props.list[0].path} className="text-blue-600 hover:text-blue-700">
								{props.list[0].title}
							</Link>
						</li>
						<li>
							<span className="text-gray-500 mx-2">/</span>
						</li>
						<li className="text-gray-500">{props.list[1].title}</li>
					</>
				)}
			</ol>
		</nav>
	);
}
