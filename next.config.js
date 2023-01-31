const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
    images: {
        loader: "akamai",
        path: ""
    },
})
