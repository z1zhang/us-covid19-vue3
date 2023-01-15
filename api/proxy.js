const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''

    if (req.url.startsWith('/backend')) {
        target = 'http://39.101.78.202:8080'
    }
    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            '^/api/': '/'
        }
    })(req, res)
}
