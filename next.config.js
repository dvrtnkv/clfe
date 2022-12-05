/** @type {import('next').NextConfig} */
const nextBuildId = require("next-build-id");
const withPWA = require("next-pwa")({
	disable: process.env.NODE_ENV === "development",
	dest: "public",
});
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: true,
	swcMinify: true,
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["tailwindui.com", "collarslab.com"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	generateBuildId: () => nextBuildId({dir: __dirname}),
	productionBrowserSourceMaps: true,
	webpack(config, {isServer}) {
		if (!isServer) {
			// don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
			config.resolve.fallback = {
				fs: false,
			};
		}
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};
module.exports = withPWA(nextConfig);
