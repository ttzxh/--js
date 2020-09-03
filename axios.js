// axios.get("/xxxxx").then(res=>{

// })


// class axios{

// }


// var xhr = new XMLHttpRequest()
// xhr.timeout = 3000
// xhr.responseText = "json"
// xhr.open("POST","http://localhost:3000/test")
// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
// xhr.onreadystatechange = function(e){
//     if(this.readyState == 4 && this.status == 200){
//         console.log(xhr.responseText)
//     }
// }
// xhr.send("a=xxx&b=zzz")


// let a = {
//     params: {
//         "a": "a1",
//         "b": "b1"
//     }
// }
// console.log(Object.values)
// for (const key in Object.keys(a.params)) {

//     // this.xhr.setRequestHeader(key, Object.value(a.params)[key])
//     console.log(Object.keys(a.params)[key])
//     console.log(Object.values(a.params)[key])

// }
// {
//     a:xxx,
//     b:xxx
// }

// ?a=xxx&b=xxx

// let a =["1","2","3"]
// let b = a.join("-")
// console.log(b)

// let a = {
//     a: "123",
//     b: "456"
// }
// let c = []
// for (const key in a) {
//     let item = []
//     item.push(key)
//     item.push(a[key])
//     console.log(item.join("="))
//     let itemStr = item.join("=")
//     c.push(itemStr)
// }
// console.log("?"+c.join("&"))

function format(query) {
    let c = []
    for (const key in query) {
        let item = []
        item.push(key)
        item.push(query[key])
        let itemStr = item.join("=")
        c.push(itemStr)
    }
    return c.join("&")
}

// console.log(format(a))

let axios = {
    defaultURL: "",
    way: "get",
    url: "",
    updateProgress: 0,
    timeout: 0,
    body: "",//post请求的参数
    GetQuery: "",//get请求的参数
    xhr: new XMLHttpRequest(),
    get(url, query, options) {
        return new Promise((resolve, reject) => {
            this.way = "get"
            this.xhr.responseText = "json",
                this.xhr.timeout = 3000
                this.timeout = 3000
                this.xhr.dataText = "text"
            if (query) {
                this.GetQuery = "?" + format(query.params)
            }
            this.xhr.open("GET", this.defaultURL + url + this.GetQuery)
            if (options) {
                for (const key in Object.keys(options.header.params)) {
                    this.xhr.setRequestHeader(Object.keys(options.header.params)[key], Object.values(options.header.params)[key])

                }
            }
            // this.xhr.ontimeout = (e) => {
            //     console.log(超时)
            // }
            // this.xhr.onprogress = (progressEvent) => {
            //     // Do whatever you want with the native progress event
            //     console.log(progressEvent.loaded)
            //     // console.log(progressEvent.total)
            // }

            // //   // `onDownloadProgress` 允许为下载处理进度事件
            // this.xhr.upload.onprogress = (progressEvent) => {
            //     // 对原生进度事件的处理
            //     console.log(progressEvent)
            // }
            this.xhr.onreadystatechange = (e) => {
                if (this.xhr.readyState == 4 && this.xhr.status == 200) {
                    console.log("6666")
                    resolve(this.xhr.responseText)
                }
            }

            this.xhr.send()

        })

    },
    post(url, body, options={header:{"Content-type":"application/x-www-form-urlencoded"}}) {
        return new Promise((resolve, reject) => {
            this.way = "post"
            this.xhr.responseText = "json",
            this.xhr.timeout = 3000
            if (body) {
                this.body = format(body)
                console.log(this.body);
                
            }
            this.xhr.open("POST", this.defaultURL + url)
            if (options) {
                for (const key in Object.keys(options.header)) {
                    this.xhr.setRequestHeader(Object.keys(options.header)[key], Object.values(options.header)[key])
                }
            }
            this.xhr.onreadystatechange = (e) => {
                if (this.xhr.readyState == 4 && this.xhr.status == 200) {
                    console.log("6666")
                    resolve(this.xhr.responseText)
                }
            }
            // this.xhr.ontimeout = (e) => {
            //     console.log("超时")
            // }
            // this.xhr.onprogress = (progressEvent) => {
            //     // Do whatever you want with the native progress event
            //     console.log(progressEvent.loaded)
            //     // console.log(progressEvent.total)
            // }

            // //   // `onDownloadProgress` 允许为下载处理进度事件
            // this.xhr.upload.onprogress = (progressEvent) => {
            //     // 对原生进度事件的处理
            //     console.log(progressEvent)
            // }
            this.xhr.send(this.body)
        })
    }
}

axios.defaultURL = "http://localhost:3000",
axios.get("/getTest",{
    params:{
        a:'GETA',
        b:"GETB"
    }
}).then(res => {
    console.log(res)
    
})


// axios.post("http://localhost:3000/test", {
//     a: "xxx",
//     b: "lll"
// }).then(res => {
//     console.log(res)
// })