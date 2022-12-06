import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const dateY = new Date().getFullYear();
	return (
		<header className="header border-b flex flex-row flex-wrap p-2 space-x-1 bg-gray-900 text-white">
			<div className="px-6 text-2xl uppercase font-bold italic w-64 header-title">
				<Link href="/">Collars Lab.</Link>
			</div>
			<div className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap lg:space-x-2">
				<div className="flex flex-row flex-nowrap space-x-2 items-center hover:underline hover:text-blue-500">
					<div className="h-4 w-4 invert">
						<Image
							src="/icons/telegram.svg"
							width={18}
							height={18}
							alt="telegram icon"
							loading="eager"
						/>
					</div>
					<Link
						href="https://t.me/collarslab"
						target="_blank"
						rel="norefferer nofollow"
						title="Канал">
						collarslab
					</Link>
				</div>
				<div className="flex flex-row flex-nowrap space-x-2 items-center hover:underline hover:text-blue-500">
					<div className="h-4 w-4 invert">
						<Image src="/icons/email.svg" width={18} height={18} alt="email icon" loading="eager" />
					</div>
					<Link
						href="mailto:dv@collarslab.com"
						target="_blank"
						rel="norefferer nofollow"
						title="Почта">
						dv@collarslab.com
					</Link>
				</div>
				<div className="flex flex-row flex-nowrap space-x-2 items-center hover:underline hover:text-blue-500">
					<div className="h-4 w-4 invert">
						<Image src="/icons/github.svg" width={18} height={18} alt="Github Logo" />
					</div>
					<Link
						href="https://github.com/dvrtnkv/"
						target="_blank"
						rel="norefferer nofollow"
						title="Github">
						dvrtnkv
					</Link>
				</div>
			</div>
		</header>
	);
}
