// eslint-disable-next-line no-undef
var app1 = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['사과', '바나나', '딸기'],
        initMessage: '초기 메시지',
        count: 0,
        show: true
    },
    methods: {
        handleCLick: function (event) {
            alert(event.target)
        }
    }
})