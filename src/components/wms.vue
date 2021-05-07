<template>
    <ul>
        <li v-for="(item,index) in boxs" :class="item.status">{{item.position}}</li>
    </ul>
</template>

<script>
    import {request} from '../network/request'

    export default {
        name: "wms",
        data(){
            return {
                boxs:[{id:1,position:'1001',status:'NO'},
                    {id:2,position:'1002',status:'USE'},
                    {id:3,position:'1003',status:'USE'},
                    {id:4,position:'1004',status:'NO'},
                    {id:5,position:'1005',status:'NO'},
                    {id:6,position:'1006',status:'YES'},
                    {id:7,position:'1007',status:'NO'},
                    {id:8,position:'1008',status:'NO'},
                    {id:9,position:'1009',status:'NO'},
                    {id:10,position:'1010',status:'NO'},]
            }
        },
       /* created() {
            request({
                url:'/list',
                method:'get'
            }).then(data=>{
                /!*在拦截器处做了拦截，接收到的直接就是数据*!/
                this.boxs=data;
            }).catch(err=>{
                console.log(err);
            })
        }*/

    }
</script>

<style scoped>
    @keyframes fade{
        from{
            opacity: 1.0;
        }
        50%{
            opacity: 0.2;
        }
        to{
            opacity: 1.0;
        }
    }
    @-webkit-keyframes fade {
        from{
            opacity: 1.0;
        }
        50%{
            opacity: 0.2;
        }
        to{
            opacity: 1.0;
        }
    }
    ul li{
        display: inline-block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        margin-left: 100px;
        margin-top: 30px;
        border:1px solid white;
    }
    .NO{
        background-color: green;
    }
    .YES{
        background-color: red;
    }
    .USE{
        background-color: rebeccapurple;
        animation: fade 600ms infinite;
        -webkit-animation: fade 600ms infinite;
    }
    .NOUSE{
    background-color:white;
    color:black;
    border:1px dashed black;
    }
</style>