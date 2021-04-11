import mongoose from 'mongoose';
import {OrderSchema} from '../models/OrderModel';
import {InventorySchema} from '../models/InventoryModel'
import {getCommonOrdersForRestaurantName} from '../analytics/orderAnalytics';

const Order = mongoose.model('Orders', OrderSchema);
const InventoryItem = mongoose.model('InventoryItem', InventorySchema);

export const get360Summary = (req,res) => {

}