// 声明人的类
class People1 {
    // 类的属性
    name: string
    age: number
    constructor(name: string, age: number) {
        //构造器，实例化方法的时候触发
        this.name = name;
        this.age = age;
    }
    // 类的方法
    sport(): string {
        return `${this.name} + 会运动`;
    }
}

// 对类进行实例化
let p1 = new People('小明', 18);

// 调用类的方法
console.log(p1.sport());






/**ts class继承 */
class ASnimal {
    name: string
    constructor(name) {
        this.name = name
    }
    getName(): string {
        return this.name
    }
}

class Dog extends ASnimal {
    constructor(name) {
        super(name)
    }
}
let d = new Dog('哈士奇')
console.log(d.name);  //哈士奇
console.log(d.getName());  //哈士奇

