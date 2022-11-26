import Link from "next/link";

const navigation = [
	{name: "Product", href: "#"},
	{name: "Features", href: "#"},
	{name: "Marketplace", href: "#"},
	{name: "Company", href: "#"},
];

export default function Nav() {
	return (
		<nav className="flex sm:justify-center space-x-4 pt-4">
			{[
				["Дом", "/houses"],
				["Рецепты", "/recipes"],
				["Продукты", "/food"],
			].map(([title, url]) => (
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
