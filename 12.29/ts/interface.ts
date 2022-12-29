/**interface 接口
 * 定义接口类型时 首字母要大写
 * 特点：相同名字的interface会合并,如果属性名相同,会以第一个接口名称定义为准
 * ？非必传,可有可无
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

interface Person {
    idCat?: string,
}

let person: Person = {
    name: '张三',
    age: 12,
    sex: 0,
    isJob: true,
    hobby: ['1', '2', '3'],
    former: 3,
    formerName: ['1', '2', '3']
}