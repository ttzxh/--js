class DCNode {
  public ele: any
  public pre: any
  public next: any
  constructor(ele: any) {
    this.ele = ele
    this.pre = null
    this.next = null
  }
}
class DCLink {
  public header: null | DCNode = null//头节点
  private pre: null | DCNode = null//上一个节点
  private count: number = 0//总节点数
  private preNode!: DCNode//最后一个节点
  add(val: any, num: number) {
    let DCN = new DCNode(val)
    if (this.header === null) {
      this.header = DCN
      this.header.pre = DCN
      this.header.next = DCN
      this.preNode = DCN
    } else if (num === 0) {
      DCN.next = this.header
      this.header.pre = DCN
      this.header = DCN
      this.preNode.next = DCN
      this.header.pre = this.preNode
    } else if (num === this.count) {
      this.header.pre = DCN
      DCN.next = this.header
      this.preNode.next = DCN
      DCN.pre = this.preNode
      this.preNode = DCN
    } else {
      let currentCount: number = 0
      let current: DCNode = this.header
      let pN: DCNode = this.preNode
      while (currentCount < num) {
        pN = current
        current = current.next
        currentCount++
      }
      DCN.next = current
      current.pre = DCN
      pN.next = DCN
      DCN.pre = pN
    }
    this.count++
  }
  del(num: number) {
    if (this.header === null) {
      return new Error("当前双重循环没有值")
    }
    if (num === 0) {
      this.header = this.header.next
      this.preNode.next = (this.header as DCNode);
      (this.header as DCNode).pre = this.preNode
    } else if (num === this.count) {
      this.preNode = this.preNode.pre
      this.preNode.next = this.header
      this.header.pre = this.preNode
    } else {
      let current: DCNode = this.header
      let currentCount: number = 0
      let pN: DCNode = this.preNode
      while (currentCount < num) {
        pN = current
        current = current.next
        currentCount++
      }
      pN.next = current.next
      current.next.pre = pN
    }
    this.count--
  }
  toString():string{
    let current: DCNode = this.header as DCNode
      let currentCount: number = 0
      let str = ""
      while (currentCount < this.count) {
        str+=current.ele+" "
        current = current.next
        currentCount++
      }
      return str
  }
  toLink():DCNode{
    return this.header as DCNode
  }
}
let aL = new DCLink()
aL.add("1", 0)
aL.add("2", 1)
aL.add("3", 2)
aL.add("4", 1)
aL.del(3)
console.log(aL.toString());//1 4 2
console.log(aL.toLink());
