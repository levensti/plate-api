import mongoose from 'mongoose';
import { OrderSchema, InventorySchema } from '../models/plateModel'

const Order = mongoose.model('Orders', OrderSchema);
const InventoryItem = mongoose.model('InventoryItem', InventorySchema);

export const addNewOrder = (req,res) => {
  let newOrder = new Order(req.body);
  newOrder.save((err, order) => {
    if (err) {
      res.send(err)
    }
    res.json(order)
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