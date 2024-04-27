const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	user_id: {type: String, required: true},
	name: {type: String, required: true },
	email: {type: String, required: true },
	passwordHash: {type: String, required: true},
	phone_number: {type: Number, required: true },
	previous_orders: [{
		order_id: {type: String, required:true },
		order_name: {type: String,required: true},
		price: {type: String,required: true},
		resturant: {type: String,required: true},
		img_link: {type: String,required: false},
	}],
})

const User = mongoose.model("User", userSchema);

module.exports = User;
