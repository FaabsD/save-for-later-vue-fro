module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/safe-for-later-vue/'
        : '/'
}