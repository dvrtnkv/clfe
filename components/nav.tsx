import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex flex-col sm:justify-center pt-4">
			{[["Дома", "/houses"]].map(([title, url]) => (
				<Link
					href={url}
					key={url}
					className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">
					{title}
				</Link>
			))}
		</nav>
	);
}
