import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const MenuItemSchema = new Schema({
    restaurantName: {
        type: String,
        required: "Name of restaurant"
    },
  menuItemID: {
    type: Number,
    required: "menu item ID"
  },
  ingredientsList: {
    type: String,
    required: "List of ingredients for this menu item"
  }
})