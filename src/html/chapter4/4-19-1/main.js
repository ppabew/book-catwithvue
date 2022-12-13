Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})
// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app4-19-1',
    data: {
        video1: false,
        video2: false
    },
    directives: {
        video(el, binding) {
            if (binding.value !== binding.oldValue) {
                console.log('호출')
                binding.value ? el.play() : el.pause()
            }
        }
    }
})