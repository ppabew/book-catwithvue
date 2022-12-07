// eslint-disable-next-line no-undef
var app = new Vue({
    el: '#app',
    data: {
        classObject: {
            child: true,
            'is-active': true
        },
        styleObject: {
            color: 'red',
            backgroundColor: 'lightgray'
        },
        item: {
            id: 1,
            src: 'item1.jpg',
            alt: '상품1의 섬네일',
            width: 200,
            height: 200
        }
    }
})