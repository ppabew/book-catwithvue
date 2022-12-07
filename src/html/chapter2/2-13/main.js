// eslint-disable-next-line no-undef,no-unused-vars
var app1 = new Vue({
    el: '#app1',
    data: {
        count: 0,
        show: true,
        message: 'Hello Vue.js'
    },
    methods: {
        handleClick: function () {
            alert('클릭했어요!')
        },
        handleInput: function (event) {
            this.message = event.target.value
        },
        handler: function (comment) {
            console.log(comment)
        }
    }
})