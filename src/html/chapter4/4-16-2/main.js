// eslint-disable-next-line no-undef

new Vue({
    el: '#app4-16-2',
    data: {
        width: 800,
        budget: 300,
        limit: 2,
        list: [
            {id: 1, name: '사과', price: 100},
            {id: 2, name: '바나나', price: 200},
            {id: 3, name: '딸기', price: 400},
            {id: 4, name: '오렌지', price: 300},
            {id: 5, name: '메론', price: 500},
        ],
        order: false
    },
    computed: {
        halfWidth: {
            get: function () {
                return this.width / 2
            },
            set: function (val) {
                this.width = val * 2
            }
        },
        computedData: function () {
            return Math.random()
        },
        matched: function () {
            return this.list.filter(function (el) {
                return el.price <= this.budget
            }, this)
        },
        sorted: function () {
            return _.orderBy(this.matched, 'price', this.order ? 'desc':'asc');
        },
        limited: function () {
            return this.sorted.slice(0, this.limit)
        },
        filteredList: function () {
            return this.limited
        }
    },
    methods: {
        methodsData: function () {
            return Math.random()
        }
    }
})