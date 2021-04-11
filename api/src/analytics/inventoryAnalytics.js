import mongoose from 'mongoose';
import {OrderSchema} from '../models/OrderModel';
import {InventorySchema} from '../models/InventoryModel';
import {MenuItemSchema} from '../models/MenuModel';
import {getCommonOrdersForRestaurantName} from './orderAnalytics';

const Order = mongoose.model('Orders', OrderSchema);
const InventoryItem = mongoose.model('InventoryItem', InventorySchema);
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);


export const getMostUsedIngredients = (req,res) => {
    Order.find({restaurantName: req.params.restaurantName}, (err, orders) => {
        var res_dict = {};
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

        for (i=0; i<arr.length; i++) {
            var menu_item_id = Object.keys(arr[i]);
            var count = Object.values(arr[i]);
            console.log(count);
            MenuItem.find({restaurantName: req.params.restaurantName, menuItemID: menu_item_id}, (err, menuItem) => {
                console.log(menuItem);
                var n;
                for (n=0; n<menuItem.length; n++) {
                    var ingredients_list = menuItem[n].ingredientsList.split(',');
                    var k;
                    for (k=0; k<ingredients_list.length; k++) {
                        var ingredients = ingredients_list[k].split(':');
                        var ingredient = ingredients[0];
                        var ingr_count = ingredients[1];
                        var times_this_ingr_used = ingr_count * count;
                        if (!(ingredient in res_dict)) {
                            res_dict[ingredient] = 0;
                        }
                        res_dict[ingredient] = res_dict[ingredient] + times_this_ingr_used;
                    }
                }

                if (err) {
                  res.send(err)
                }
                res.json(res_dict);
              })
        }
    if (err) {
        res.send(err)
      }
    })
  }