Component({
	behaviors: [],
	properties: {
		info: {
			type: Object,
			value: {},
		},
	},
	data: {

	},
	lifetimes: {
		attached() {},
		moved() {},
		detached() {},
	},
	attached() {},
	ready() {},
	pageLifetimes: {
		show() {},
		hide() {},
		resize() {},
	},
	methods: {
		onMyButtonTap() {
			this.setData({})
		},
		_myPrivateMethod() {
			this.setData({
				'a[0].B': 'myPrivateData'
			})
		},
		_propertyChange(newVal, odlVal){

		},
	}
})