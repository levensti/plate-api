import mongoose from 'mongoose';
import {OrderSchema} from '../models/OrderModel';
import {InventorySchema} from '../models/InventoryModel'
import {MenuItemSchema} from '../models/MenuModel'

const Order = mongoose.model('Orders', OrderSchema);
const InventoryItem = mongoose.model('InventoryItem', InventorySchema);
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);

export const addNewOrder = (req,res) => {
  let newOrder = new Order(req.body);
  newOrder.save((err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
  })
}

export const addNewMenuItem = (req,res) => {
  console.log('get here');
  console.log(req.body);
  let newMenuItem = new MenuItem(req.body);
  newMenuItem.save((err, item) => {
    if (err) {
      res.send(err)
    }
    res.json(item)
  })
}

export const getMenuItemsForRestaurantName = (req,res) => {
  MenuItem.find({restaurantName: req.params.restaurantName}, (err, menuItem) => {
    if (err) {
      res.send(err)
    }
    res.json(menuItem)
  })
}

export const addNewInventoryItem = (req,res) => {
  let newInventoryItem = new InventoryItem(req.body);
  newInventoryItem.save((err, inventoryItem) => {
    if (err) {
      res.send(err)
    }
    console.log(inventoryItem);
    res.json(inventoryItem)
  })
}

export const modifyInventoryItem = (req,res) => {
  console.log(req.body);
  InventoryItem.findOneAndUpdate({restaurantName: req.params.restaurantName, itemName: req.params.itemName}, req.body, { new: true, useFindAndModify: false }, (err, inventoryItem) => {
    if (err) {
      res.send(err)
    }
    res.json(inventoryItem)
  })
}

export const getInventoryItems = (req,res) => {
  InventoryItem.find({}, (err, inventoryItem) => {
    if (err) {
      res.send(err)
    }
    res.json(inventoryItem)
  })
}

export const getInventoryItemsForRestaurantName = (req,res) => {
  InventoryItem.find({restaurantName: req.params.restaurantName}, (err, inventoryItem) => {
    if (err) {
      res.send(err)
    }
    res.json(inventoryItem)
  })
}


export const getOrders = (req,res) => {
  Order.find({}, (err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
  })
}

export const getOrdersForOrderID = (req,res) => {
  console.log(req.params);
  Order.findById(req.params.orderID, (err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
  })
}

export const getOrdersForRestaurantName = (req,res) => {
  Order.find({restaurantName: req.params.restaurantName}, (err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
  })

}