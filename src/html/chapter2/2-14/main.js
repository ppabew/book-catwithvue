// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app2-14',
    data: {
        message: 'Hello',
        val: true,
        valList: [],
        valList1: '',
        valList2: '',
        preview: '',
        val1: 50,
        price: 100
    },
    methods: {
        handleChange: function (event) {
            var file = event.target.files[0]
            if(file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file)
            }
        }
    }
});