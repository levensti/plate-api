import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
  restaurantName: {
    type: String,
    required: "Name of restaurant"
  },
  orderTotalCost: {
    type: Number,
    required: "Enter money the order cost"
  },
  menuItems: {
    type: String,
    required: "Menu items separated by comma"
  },
  serviceDuration: {
    type: Number,
    required: "Total service time in hours."
  },
  ingredientsList: {
    type: String,
    required: "Ingredients and quantity. Format: romaine_lettuce:2,tomato:3"
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})