module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'dist/sw.js'
};