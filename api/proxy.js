const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''

    if (req.url.startsWith('/api')) {
        target = 'http://localhost:8080'
    }
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            '^/api/': '/'
        }
    })(req, res)
}
