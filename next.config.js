const path = require('path')

module.exports = {
    watch: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    trailingSlash: true,
}