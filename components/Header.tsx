import Image from "next/image";
import Link from "next/link";

export default function Header() {
	const dateY = new Date().getFullYear();
	return (
		<header className="header border-b py-1 pr-1 flex flex-row flex-wrap bg-gray-900 text-white">
			<Link href="/" className="header-title">
				<div className="w-56 text-center uppercase">
					<span className="text-xl font-bold italic tracking-widest hover:underline">
						Collars Lab.
					</span>
					<h2 className="header-title text-xs">web-development</h2>
				</div>
			</Link>
			<div className="flex flex-col flex-wrap content-center lg:flex-row lg:flex-nowrap">
				{/* <div className="flex flex-row flex-nowrap space-x-2 items-center hover:underline hover:text-blue-500">
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
				</div> */}
				<div className="flex flex-row flex-nowrap space-x-2 items-center hover:underline hover:text-blue-500">
					<div className="h-5 w-5 invert">
						<Image src="/icons/email.svg" width={20} height={20} alt="email icon" loading="eager" />
					</div>
					<Link
						href="mailto:dv@collarslab.com"
						target="_blank"
						rel="norefferer nofollow"
						title="Почта">
						dv@collarslab.com
					</Link>
				</div>
				{/* <div className="flex flex-row flex-nowrap space-x-2 items-center hover:underline hover:text-blue-500">
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
				</div> */}
			</div>
		</header>
	);
}
