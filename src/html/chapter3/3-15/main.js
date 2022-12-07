// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app3-15',
    data: {
        scrollY: 0,
        timer: null
    },
    created: function () {
        document.getElementById("myDiv").addEventListener('scroll',this.handleScroll)
    },

    beforeUnmount: function () {
        window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll: function () {
            console.log('dddd')
            if(this.timer === null) {
                this.timer = setTimeout(function () {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null

                }.bind(this), 200)
            }
        }
    }
})