// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app',
    data: {
        message: {
            value: 'Hello~~~ Vue.js'
        },
        list: ['사과', '바나나', '딸기'],
        num: 1,
        scroll: 0,
        count: 0
    },
    mounted: function () {
        this.scroll = 100
    },
    methods: {
        increment: function () {
            this.count += 1
        }
    }
})