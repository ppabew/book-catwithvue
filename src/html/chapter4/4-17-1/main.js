// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app4-17-1',
    data: {
        list: [],
        current: '',
        topics: [
            {value: 'vue', name: 'Vue.js'},
            {value: 'jQuery', name: 'jQuery'},

        ]
    },
    watch: {
        current: function (val) {
            axios.get('https://api.github.com/search/repositories?q=Q',
                {params: {q: 'topic ' + val}}
            )
                .then(function (response) {
                    console.log(response.data.items)
                    this.list = response.data.items
                }.bind(this))
        }
    },

})