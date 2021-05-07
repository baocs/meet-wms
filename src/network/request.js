/*axios的封装，防止每一个组件对全局axios的过度依赖*/
import axios from "axios";

//config是传入的配置
export function request(config) {
    /*第一步：创建一个实例对象*/
    const instance=axios.create({
        /*baseURL:'/api',*/
        timeout:6000
    })
    /*第二步：拦截器的配置*/
    instance.interceptors.request.use((config)=>{
        /*这里是请求发出去会来到的地方*/
        //1.修改一些config的配置
        //2.展示网络延迟的动态图
        //3.忘了
        return config;
    },(err)=>{
        /*这里是请求发送失败会来到的地方*/
        console.log(err);
    })

    instance.interceptors.response.use((data)=>{
        /*拦截后只把有效的数据返回出去*/
        return data.data;
    },(err)=>{
        console.log(err);
    });


    /*第三步：返回promise对象*/
    return instance(config);
}