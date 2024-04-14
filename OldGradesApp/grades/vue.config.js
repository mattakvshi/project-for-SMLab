module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    
    devServer: {
        proxy: {
            '/api': {
                target: 'http://178.154.199.253/dsks-cmw', //'http://dskscmw-dev.web.local/dsks-cmw', //'http://localhost:8080/(APPLICATION_CONTEXT - если есть)'
                ws: true,
                changeOrigin: true
            }
        }
    }
}
