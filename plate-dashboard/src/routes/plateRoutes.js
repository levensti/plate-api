import {addNewInventoryItem, addNewOrder, getOrders, getOrdersForOrderID, getOrdersForRestaurantName, getInventoryItems, getInventoryItemsForRestaurantName, modifyInventoryItem} from '../controllers/plateControllers';


const routes = (app) => {
    //create route for orders
    app.route('/orders')
      //get all orders
      .get(getOrders)
      //create post request
      .post(addNewOrder)

    app.route('/orders/:orderID')
      // get specific order from id
      .get(getOrdersForOrderID)
    app.route('/orders/restaurant/:restaurantName')
      // get all orders by restaurant name
      .get(getOrdersForRestaurantName)

    //create route for inventory
    app.route('/inventory')
      .post(addNewInventoryItem)
      
      .get(getInventoryItems)

    app.route('/inventory/:restaurantName')
      .get(getInventoryItemsForRestaurantName)

    app.route('/inventory/:restaurantName/:itemName')
      .put(modifyInventoryItem)
  }
  // export it!
  export default routes;