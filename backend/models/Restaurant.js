const mongoose = require('mongoose')

const restaurantSchema = new mongoose.Schema({
	name: {type: String, required: true },
	email: {type: String, required: true },
	passwordHash: {type:String, required: true},
	img_link: {type: String, required: true},
	phone_number: {type: Number, required: true },
	menu: [{
		item_name: {type: String,required: true},
		item_price: {type: String,required: true},
		category: {type: String,required: false},
		img_link: {type: String,required: true},
		review: {type: String,required: true},
	}],
	previous_orders: [{
		item_name: {type: String,required: true},
		item_price: {type: String,required: true},
		category: {type: String,required: false},
		img_link: {type: String,required: true},
		review: {type: String,required: true},
	}],
})

const Restaurant = mongoose.model("Resturant", restaurantSchema);

module.exports = Resturant;
