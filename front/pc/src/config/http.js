import axios from 'axios'

axios.defaults.timeout = 80000

axios.interceptors.request.use(
    config => {
        // if (
        //     config.method === 'post' ||
        //     config.method === 'put' ||
        //     config.method === 'delete'
        // ) {
        //     // 序列化
        //     config.data = qs.stringify(config.data)
        // }
        return config
    },
    error => {
        console.log('requesting')
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        // 返回数据报错
        // if(re.data && !res.data.) {
        // MessageBox({
        //     title: '提示',
        //     message: '错误'
        // });
        //return Promise.reject(res.data.error.message);
        // }

        if (response.data.code !== 0) {
            console.log('responseing')
            // return Promise.reject(new Error(response.data.msg))
        }
        return response
    },
    error => {
        console.log('err' + error)
        // if (error.response.status === 403) {
        //     router.push({
        //         path: '/error/403'
        //     })
        // }
        // if (error.response.status === 500) {
        //     router.push({
        //         path: '/error/500'
        //     })
        // }
        // if (error.response.status === 502) {
        //     router.push({
        //         path: '/error/502'
        //     })
        // }
        // if (error.response.status === 404) {
        //     router.push({
        //         path: '/error/404'
        //     })
        // }
        return Promise.reject(error)
    }
)

export default axios
