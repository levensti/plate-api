import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const storageTypes = {
    FRIDGE : "FRIDGE",
    FREEZER : "FREEZER",
    ROOM : "ROOM"
  }
  
export const InventorySchema = new Schema({
    restaurantName: {
        type: String,
        required: "Restaurant name."
    },
    itemName: {
        type: String,
        required: "Item name"
    },
    price: {
        type: Number,
        required: "Item price in dollars"
    },
    count: {
        type: Number,
        required: "Number of items"
    },
    storageType: {
        type: storageTypes,
        required: "Storage Type"
    },
    perishTime: {
        type: Number,
        required: "Perish Time in days"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})