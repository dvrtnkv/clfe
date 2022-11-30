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
		domains: ["tailwindui.com"],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
	generateBuildId: () => nextBuildId({dir: __dirname}),
	productionBrowserSourceMaps: true,
	images: {
		formats: ["image/avif", "image/webp"],
		domains: ["collarslab.com"],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};
module.exports = withPWA(nextConfig);
