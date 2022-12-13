// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app3-15',
    data: {
        scrollY: 0,
        timer: null
    },
    created() {
        window.addEventListener('scroll',this.handleScroll)
    },

    beforeUnmount: function () {
        window.removeEventListener('scroll', this.handleScroll)
    },

    mounted() {
        window.addEventListener("scroll", this.scrollFunction);
    },

    methods: {
        handleScroll() {
            console.log(scrollY)
            if(this.timer === null) {
                this.timer = setTimeout(function () {
                    this.scrollY = window.scrollY
                    clearTimeout(this.timer)
                    this.timer = null

                }.bind(this), 200)
            }
        },
        scrollFunction() {
            console.log("scrolling from method");
        }
    }
})