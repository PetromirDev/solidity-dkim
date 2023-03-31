/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
		emotion: true
	},
	webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
		// Important: return the modified config
		config.module.rules.push({ test: /\.eml$/, use: 'raw-loader' })

		return config
	}
}

module.exports = nextConfig
