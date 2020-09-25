//map
// let a = [7,"asdasd", 8,4, 6, 3, 10]
// let b = a.map((item, index) => {
//   return item * index
// })
// console.log(b);

// Array.prototype.map = function (cb) {
//   let templateArr = []
//   for (const index in this) {
//     if (this.hasOwnProperty(index)) {
//       let item = cb(this[index], index)
//       templateArr.push(item)
//     }
//   }
//   return templateArr
// }

// let d = a.map((item, index) => {
//   return item * index
// })
// console.log(d);

// let c = a.filter((item, index) => {
//   return item >= 3
// })
// console.log(c);
// Array.prototype.filter = function (cb) {
//   let templateArr = []
//   for (const key in this) {
//     if (this.hasOwnProperty(key)) {
//       if (cb(this[key], key)) templateArr.push(this[key])

//     }
//   }
//   return templateArr
// }
// let e = a.filter((item, index) => {
//   return item >= 3
// })
// console.log(e);
//map
// let b = a.map((item, index) => {
//   return item * index
// })
// console.log(b);

// Array.prototype.map = function (cb) {
//   let templateArr = []
//   for (const index in this) {
//     if (this.hasOwnProperty(index)) {
//       let item = cb(this[index], index)
//       templateArr.push(item)
//     }
//   }
//   return templateArr
// }

// let d = a.map((item, index) => {
//   return item * index
// })
// console.log(d);

// let c = a.filter((item, index) => {
//   return item >= 3
// })
// console.log(c);
// Array.prototype.filter = function (cb) {
//   let templateArr = []
//   for (const key in this) {
//     if (this.hasOwnProperty(key)) {
//       if (cb(this[key], key)) templateArr.push(this[key])

//     }
//   }
//   return templateArr
// }
// let e = a.filter((item, index) => {
//   return item >= 3
// })
// console.log(e);
// console.time()
// let f = a.sort((x, y) => {
//   //结论 最小二乘法 x为当前比较元素 y为被二乘法筛选出来的元素
//   return x - y
// })
// console.timeEnd()
// Array.prototype.sort = function (cb) {
//   let AsContain = []
//   for (const key in this) {
//     if (this.hasOwnProperty(key)) {
//       if(typeof this[key]!="number"){
//         AsContain.push(this[key])
//         this[key] = this[key].charCodeAt()
//       }
//       if(key>0){
//       test(this,0,key-1,key,cb)
//         }
//     }
//   }
//   return this.map(item=>{
//     let aa= AsContain.find(item1=>{
//       return item1.charCodeAt()==item
//     })    
//     return aa?aa:item
//   })
// }
// console.time()
// let g = a.sort((x,y)=>{    
//   return x - y
// })
// console.timeEnd()
// function test(arr,Fkey,Lkey,Ckey,cb){  
//   let tt = arr[Ckey]
//   let Mkey = Math.ceil((Fkey+Lkey) / 2)
//   let Res = cb(arr[Ckey],arr[Mkey])  
// 	if(arr[Ckey]>arr[Ckey-1]){
// 		return arr;
//   }
//   if(arr[Ckey]<arr[0]){
//     arr.splice(Ckey, 1)
//     arr.splice(0, 0, tt)  
//     return arr  
//   }
// 	if(Mkey!==Lkey){
// 		if(Res>0){
// 			test(arr, Mkey, Lkey, Ckey, cb)
// 		}else{
// 			test(arr, Fkey, Mkey, Ckey, cb)
// 		}
	
// 	}else{     
//       if (Res > 0) {
//         arr.splice(Ckey, 1)
//         arr.splice(Mkey+1, 0, tt)
//       }else{
//         arr.splice(Ckey, 1)
//         arr.splice(Mkey, 0, tt)      
//       }
//     }
//     return (arr);
// 	}



// let h = a.reduce((pre,item,index)=>{
// // console.log(pre,item,index)
// 	return pre+item
// })
// console.log(h)

// Array.prototype.reduce=function(cb,pre){
// 	if(pre!==undefined){
//     for(let key in this){
//       pre = cb(pre,this[key],key)
//     }
//   }else{
//     pre = this[0]
//     for (const key in this) {
//       if (this.hasOwnProperty(key)) {
//         if(key!=0){
//           pre = cb(pre,this[key],key)
//         }
//       }
//     }
//   }
//  return pre
// }
// let i = a.reduce((pre,item,index)=>{
  
//     return pre+item
//   })
//   console.log(i)
// let j = a.find((item,index)=>{
//   return item <999
// })
// console.log(j);
// Array.prototype.find=function(cb){
//   for (const key in this) {
//     if (this.hasOwnProperty(key)) {
//       return cb(this[key],key)?this[key]:undefined
//     }
//   }
// }
// let k = a.find((item,index)=>{
//   return item === 4
// })
// console.log(k);
// let l =a.findIndex((item,index)=>{
//   return item > "asd"
// })
// console.log(l);
// Array.prototype.findIndex = function(cb){
//   for (const key in this) {
//     if (this.hasOwnProperty(key)) {
//         if(cb(this[key],key)){
//           return this.indexOf(this[key])
//         }
//     }
//   }
//   return -1
// }
// let m =a.findIndex((item,index)=>{
//   return item > "asd"
// })
// console.log(m);


