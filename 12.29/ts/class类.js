// 声明人的类
class People {
	// 类的属性
	constructor(name, age) {
		//构造器，实例化方法的时候触发
		this.name = name;
		this.age = age;
	}
	// 类的方法
	sport() {
		return this.name + '会运动';
	}
}

// 对类进行实例化
let p = new People('小明', 18);

// 调用类的方法
console.log(p.sport());

// 获取类的属性
console.log(p.age);
