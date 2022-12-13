// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app4-16-1',
    data: {
        width: 800,
        height: 600
    },
    computed: {
        halfWidth: function () {
            return  this.width / 2
        },
        halfHeight: function () {
            return this.height / 2
        },
        halfPoint: function () {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        }
    }
})