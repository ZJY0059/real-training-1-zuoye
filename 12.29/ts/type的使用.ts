/**type
 * 可以定义基本类型,联合类型,元祖类型
 */


// 基本类型
type StringType = string

// 联合类型
type paramType =number|string

// 元祖类型
type arrType=[string,string,number]

// 定义函数类型--类型别名
type AddFunc={name:string,age:number}


// 总结
// 1. 如果需要被extends或者implements,则尽量使用接口
// 2. 如果需要使用联合类型或者元祖类型,类型别名会更合适
// 3. 如果定义对象或函数,则都可以
// 4. 如果实在不想选择的话,就能用interface实现,用interface,如果不能就用type
// 相同点
//  1.都可以描述一个对象或者函数