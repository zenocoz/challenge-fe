const { createProxyMiddleware } = require("http-proxy-middleware");
const BACKEND_API = "https://challenge-fullstack.onrender.com";

module.exports = function (app) {
	app.use(
		"/api",
		createProxyMiddleware({
			target: BACKEND_API,
			changeOrigin: true,
		})
	);
};
