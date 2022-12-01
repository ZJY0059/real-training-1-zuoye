const minix = {
    beforeCreate() {
        console.log('实例创建前');
    },
    created() {
        console.log('实例创建后');
    },
    methods: {
        adds() {
          
            console.log('我是混入显示的');
        }
    },
}
export default minix