// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app',
    data: {
        list: [
            {id: 1, name: '슬라임', hp: 100},
            {id: 2, name: '고블린', hp: 200},
            {id: 3, name: '드래곤', hp: 500},
        ],
        styleObject: {
            color: 'red'
        },
        list1: ['슬라임', '고블린', '드래곤'],
        list3: []
    },
    methods: {
        doRemove: function (index) {
            console.log(index)
            this.list.splice(index, 1)
        },
        doAttack: function (index) {
            console.log(index)
            this.list[index].hp -= 10
            if(this.list[index].hp === 0) {
                this.list.splice(index, 1)
            }
        }
    },
    created: function () {
        // eslint-disable-next-line no-undef
        axios.get('list.json').then(function (response) {
            // 데이터를 읽어 들였다면 list에 할당하기
            this.list3 = response.data
        }.bind(this)).catch(function (e) {
            console.error(e)
        })
    }
})