module.exports = {
    devServer:{
        port:8008,
        host:'127.0.0.1',
        https:false,
        open:true,
        /*以下是前端服务器的代理的配置*/
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080',
                // 在本地会创建一个虚拟服务端，然后发送请求的数据，
                // 并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                changeOrigin: true,//是否跨域
                ws: true,//是否支持websocket
                pathRewrite: {
                    '^/api': ''
                    // 替换target中的请求地址，也就是说以后
                    // 你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                }
            }
        }
    }
}