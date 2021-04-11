import {addNewInventoryItem, addNewOrder, getOrders, getOrdersForOrderID, getOrdersForRestaurantName, getInventoryItems, getInventoryItemsForRestaurantName, modifyInventoryItem,addNewMenuItem,getMenuItemsForRestaurantName } from '../controllers/plateControllers';
import {getCommonOrdersForRestaurantName} from '../analytics/orderAnalytics';

const routes = (app) => {
    //create route for orders
    app.route('/v0/orders')
      //get all orders
      .get(getOrders)
      //create post request
      .post(addNewOrder)

    app.route('/v0/orders/:id')
      // get specific order from id
      .get(getOrdersForOrderID)
    app.route('/v0/orders/restaurant/:name')
      // get all orders by restaurant name
      .get(getOrdersForRestaurantName)

    //create route for inventory
    app.route('/v0/inventory')
      .post(addNewInventoryItem)
      
      .get(getInventoryItems)

    app.route('/v0/inventory/:restaurantName')
      .get(getInventoryItemsForRestaurantName)

    app.route('/v0/inventory/:restaurantName/:itemName')
      .put(modifyInventoryItem)

    app.route('/analytics/:restaurantName/menu_item_popularity')
      .get(getCommonOrdersForRestaurantName)

    // Create route for creating menu items
    app.route('/menu_items/')
      .post(addNewMenuItem)
    app.route('/menu_items/:restaurantName')
      .get(getMenuItemsForRestaurantName)

  }
  // export it!
  export default routes;