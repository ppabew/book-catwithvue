// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app4-18-1',
    data: {
        price: 19800
    },
    filters: {
        localNum: function (val) {
            return val.toLocaleString()
        },
        filter: function (message, foo, num) {
            console.log(message, foo, num)
        },
        round: function (val) {
            return Math.round(val * 100) / 100
        },
        radian: function (val) {
            return val * Math.PI / 180
        }
    }
})

Vue.filter('localNum', function (val) {
    return val.toLocaleString()
})