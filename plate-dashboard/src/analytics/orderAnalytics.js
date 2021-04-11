import mongoose from 'mongoose';
import { OrderSchema, InventorySchema } from '../models/plateModel'

const Order = mongoose.model('Orders', OrderSchema);
const InventoryItem = mongoose.model('InventoryItem', InventorySchema);

export const getCommonOrdersForRestaurantName = (req,res) => {
    Order.find({restaurantName: req.params.restaurantName}, (err, orders) => {
    var i;
    var menu_items_dict = {};
    for (i=0; i<orders.length; i++) {
        var items_this_order = orders[i].menuItems.split(',');
        var j;
        for (j=0; j<items_this_order.length; j++) {
            if (!(items_this_order[j] in menu_items_dict)) {
                menu_items_dict[items_this_order[j]] = 0;
            }
            menu_items_dict[items_this_order[j]] = menu_items_dict[items_this_order[j]] +1;
        }
    }
    var data = Object.entries(menu_items_dict).map(([key, value]) => ({[key]: value}));
    
    var arr = [];

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            arr.push(data[key]);
        }
    }
    arr.sort();
    arr.reverse();
    
    console.log(arr);
    
    if (err) {
        res.send(err)
      }
      res.json(arr)
    })
  }