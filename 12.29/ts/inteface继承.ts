interface Veget {
    name: string
}
interface Tomato extends Veget {
    age: number
}
let a: Tomato = {
    age: 1,
    name: '张三'
}