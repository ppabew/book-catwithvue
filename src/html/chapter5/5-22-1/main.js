// Vue.component('my-component',{
//     template: '<p>MyComponent</p>'
// })

var myComponent = {
    template: '<p>MyComponent!!</p>'
}

Vue.component('my-componenet', {
    template: '<p><></p>'
})

// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app-5-22-1',
    data: {
    },
    components: {
        'my-component': myComponent
    }
})