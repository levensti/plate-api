import {addNewInventoryItem, addNewOrder, getOrders, getOrdersForOrderID, getOrdersForRestaurantName, getInventoryItems, getInventoryItemsForRestaurantName, modifyInventoryItem,addNewMenuItem,getMenuItemsForRestaurantName } from '../controllers/plateControllers';
import {getCommonOrdersForRestaurantName} from '../analytics/orderAnalytics';

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