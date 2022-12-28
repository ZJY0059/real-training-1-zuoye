

/**number */
let num1: number = 1
let num2: number = 2
let sum: number = num1 + num2

/**string */
let str1: string = '毕业'
let str2: string = '年薪百万'
let str: string = str1 + str2

/**bool */
let bool: boolean = true

/**数组 array
 * 第一种：number[]   相当于js字面量创建
 * 第二种：Array<number>   相当于jsnew一个数组
 * 
 */

/**number类型数组 */
let array: number[] = [1, 1, 2, 3, 4, 5]

/**string类型数组 */
let string: string[] = ['1', '2', '3']


/**boolean */
let boolean1: boolean[] = [true, false]
// 第二种
let array3: Array<number> = [1, 2, 3, 4, 5, 6]
let array4: Array<string> = ['1', '2']



/**object的对象 */
declare function create(o: object | null | undefined): void
create({ props: 0 })
create(null)
create(undefined)
// create(123)      //类型“number”的参数不能赋给类型“object”的参数
// create('123')    //类型“string”的参数不能赋给类型“object”的参数

/**简单写法 */
let obj: { name: string, age: number }
obj = { name: '小明', age: 13 }


/**any：任意类型
 * 特点：在公司中慎用any,能不用就不用
 */
let name1: any = 'string'
name1 = 123


/**枚举 enum */
enum CODE {
    SUCCESS = 200,
    ERROR = 500,
}
console.log(CODE.SUCCESS);
console.log(CODE['SUCCESS']);
enum CODE1 {
    SUCCESS,
    ERROR,
    ADDSR,
}
console.log(CODE1.SUCCESS); //0
console.log(CODE1.ERROR);   //1
console.log(CODE1.ADDSR);   //2

enum CODE2 {
    SUCCESS,
    ERROR = 500,
    ADDSR,
}
console.log(CODE2.SUCCESS); //0
console.log(CODE2.ERROR);   //500
console.log(CODE2.ADDSR);   //501


/**void类型
 * void和any相反,
 * void是表示没有任意类型,就是什么类型都不是,这在我们定义函数,函数没有返回值时会用到
 */
function getName1(name: string, age: number): void {
    console.log(123);
}

function getName2(name: string, age: number): string {
    return name + age

}



/**交叉类型 &
 * 等于合并的意思
 */
interface use {
    name: string,
    age: number
}
interface per {
    sex: number
}
type allInfo = use & per
let person: use & per = { name: '小刘', age: 1, sex: 1 }




/**联合类型 | 
 *满足两者任意一个即可
*/
let allType: number | string
allType = 1
allType = '1q23'






/**类型断言 
 * 第一种写法'尖括号'语法
*/
let someValue: any;
someValue = 123
someValue = 'dddd'
let someValuelength = (<string>someValue).length


/**第二种 作为as进行编写 */
let someName: any;
someName = 123
someName = 'dddd'
let someNameValueLength = (someName as string).length


/**
 * interface
 * 类型于对象:{} 代码块
 * 接口的高阶用法
 */
interface Person {
    name: string,
    age: number,
    sex: number,
    isJob: boolean,
    hobby: string[],
    former: number,
    formerName: [string, string, string]
}

let person1: Person = {
    name: '蔡徐坤',
    age: 20,
    sex: 0,
    isJob: true,
    hobby: ['唱跳', 'rap', '篮球'],
    former: 3,
    formerName: ['蔡1', '蔡2', '蔡3']
}