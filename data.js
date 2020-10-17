
class zhan {
    data = []
    add(val) {
        this.data.push(val)
        return this.data
    }
    del() {
        this.data.pop()
        return this.data
    }
    toString() {
        let res = ""

        if (this.data.length === 0) {
            return res
        } else {
            this.data.forEach(item => {
                res += " " + item
            })
        }
        return res
    }
}



class queue {
    data = []
    add(val) {
        this.data.push(val)
        return this.data
    }
    del() {
        return this.data.shift()

    }
    toString() {
        let res = ""

        if (this.data.length === 0) {
            return res
        } else {
            this.data.forEach(item => {
                res += " " + item
            })
        }
        return res
    }
}

class node {
    constructor(ele) {
        this.ele = ele
        this.next = null
    }

}
class link {
    count = 0
    header = null
    //在local处添加元素
    add(val, local) {
        if (local > this.count) {
            local = this.count
            this.push(val)
        } else if (local < 0) {
            local = 0
            this.shift(val)
        } else {
            let current = this.header
            let currentCount = 0
            while (currentCount < local - 1) {
                current = current.next
                currentCount++
            }
            let newnode = new node(val)
            newnode.next = current.next
            current.next = newnode
            // newnode.ele
        }
        this.count++

    }
    push(val) {
        let val1 = new node(val)
        if (this.header === null) {
            this.header = val1
        } else {
            let current = this.header
            while (current.next !== null) {
                current = current.next
            }
            current.next = val1
        }
        this.count++
    }
    unshift(val) {
        let val1 = new node(val)
        let current = this.header
        this.header = val1
        val1.next = current
        this.count++
    }
    del(local) {
        if(local<0||local>this.count){
            return
        }
        if (local <= 0 ) {
            this.shift()
        } else if (local >= this.count) {
            this.push()
        } else {
            let pre
            let currentCount = 0
            let current = this.header
            while (currentCount < local) {
                pre = current
                current = current.next
                currentCount++
            }
            if(pre) pre.next = current.next
            // current.next = current.next.next
            this.count--
        }
    }
    //将链表的最后一个元素删除
    pop() {
        let currentCount = 0
        let current = this.header
        while (currentCount < this.count - 2) {
            current = current.next
            currentCount++
        }
        current.next = null
        this.count--

    }
    //根据索引查数据
    find(num){
        let currentCount = 0
        let current = this.header
        while(currentCount<num){
            current = current.next
            currentCount++
        }
        return current.ele
    }
    shift() {
        this.header = this.header.next
        this.count--
    }
    toString(){
        let current = this.header
        let str = ""
        let currentCount = 0
        while(currentCount<this.count){
            str += current.ele+" "
            current = current.next
            currentCount++
        }
        return str
    }
}


class doubleNode{
    constructor(ele){
        this.ele = ele
        this.pre = null
        this.next = null
    }
}
class doubleLink{
    header = null
    count = 0
    push(val){
        let DN = new doubleNode(val)
        if(this.header===null){
            this.header = DN
        }else{
            let currentCount = 0
            let pre = null
            let current = this.header
            while(currentCount<this.count-1){
                pre = current.pre
                current = current.next
                currentCount++
            }
            current.next = DN
            DN.pre = current
        }
        this.count++
    }
    unshift(val){
        let DN = new doubleNode(val)
        if(this.header === null){
            this.header = DN
        }else{
            DN.next = this.header
            this.header.pre = DN
            this.header = DN
        }
        this.count++
    }
    pop(){
        if(this.header === null){
            new Error("无法删除")
        }else{
            let currentCount = 0
            let pre = null
            let current = this.header
            while(currentCount<this.count-1){
                current.pre = pre
                pre = current
                current = current.next
                currentCount++
            }
            pre.next = null
            current.pre = null
            this.count--
        }
    }
    shift(){
        if(this.header === null){
            new Error("无法删除")
        }else{
            this.header = this.header.next
            this.header.pre = null
            this.count--
        }
    }
    add(val,num){
        if(num<=0){
            this.unshift(val)
        }else if(num>=this.count){
            this.push(val)
        }else{
            let DN = new doubleNode(val)
            let currentCount = 0
            let pre = null
            let current = this.header
            while(currentCount<num){
                current.pre = pre
                pre = current
                current = current.next
                currentCount++
            }
            pre.next = DN
            DN.next = current
            current.pre = DN
            DN.pre = pre
            this.count ++
        }
    }
    del(local){
        if(local<=0){
            this.shift()
        }else if(local>=this.count-1){
            this.pop()
        }else{
            let curretCount = 0
            let pre = null
            let current = this.header
            while(curretCount<local){
                current.pre = pre
                pre = current
                current = current.next
                curretCount++
            }
            current.pre = null
            pre.next = current.next
            current.next.pre = pre
            this.count--
        }
    }
    //根据索引找node
    find(num){
        if(num>=this.count||num<0) return -1
        let current = this.header
        let currentCount = 0
        let pre = null
        while(currentCount<num){
            current.pre = pre
            pre = current
            current = current.next
            currentCount++
        }
        return current.ele
    }
    //根据值找索引
    local(val){
        let current = this.header
        let currentCount = 0
        let pre = null
        let arr = []
        while(currentCount<this.count){
            if(current.ele === val){
                arr.push(currentCount)
            }
            current.pre = pre
            pre = current
            current = current.next
            currentCount++
        }
        return arr
    }
    toString(){
        if(this.header === null){
            return ""
        }else{
            let currentCount = 0
            let current = this.header
            let str = ""
            while(currentCount<this.count){
                str+=current.ele+" "
                current = current.next
                currentCount++
            }
        return str 

        }
    }
}
class CNode{
    constructor(ele){
        this.ele = ele
        this.next = null
    }
}
class CLink{
    header = null
    count = 0
    //最后一个节点
    pre = null
    add(val,num){
        let CN = new CNode(val)
        if(this.header===null){
            this.header = CN
            this.header.next = CN
            this.pre = CN
        }
        else if(num === 0){
            let current = this.header
            this.header = CN
            this.header.next = current
            this.pre.next = this.header
        }else if(num === this.count){
            this.pre.next = CN
            this.pre = CN
            this.pre.next = this.header
        }
        else{
            let currentCount = 0
            let current = this.header
            while(currentCount<num){
                this.pre = current
                current = current.next
                currentCount++
            }
            this.pre.next = CN
            CN.next = current
        }
        this.count++
    }
    del(num){
        if(num === 0){
            this.header = this.header.next
            this.pre.next = this.header
        }else if(num === this.count){
            let currentCount = 0
            let current = this.header
            let preNode = null
            while(currentCount<this.count){
                preNode = current
                current = current.next
                this.currentCount++
            }
            this.pre = preNode
            this.pre = this.header
        }else{
            let currentCount = 0
            let current = this.header
            let preNode = null
            while(currentCount<num){
                preNode = current
                current = current.next
                currentCount++
            }
            preNode.next = current.next
        }
        this.count--
    }
    toString(){
        let current = this.header
        let currentCount = 0
        let str = ""
        while(currentCount<this.count){
            str+=current.ele+" "
            current = current.next
            currentCount++
        }
        return str
    }
}
