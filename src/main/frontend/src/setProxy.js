// 프론트엔드에서 /api로 요청을 보내면, 백엔드인 8080포트 (target)으로 요청이 도착하게 된다.

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};