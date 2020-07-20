const app = new Vue({
	el: '#app',
	data: {
		books: [{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '《UNIT编程》',
				date: '2006-2',
				price: 59.00,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2008-10',
				price: 39.00,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-3',
				price: 128.00,
				count: 1
			}
		]
	},
	methods: {
		jia(index) {
			this.books[index].count++
		},
		jian(index) {
			this.books[index].count--
		},
		removeclick(index) {
			this.books.splice(index, 1)
		}
	},
	computed: {
		sum() {
			return this.books.reduce(function(pre,book){
				return pre+ book.price*book.count
			},0)
		}
		
		
},
filters: {
	showprice(price) {
		return '￥' + price.toFixed(2)

	}
}
})
