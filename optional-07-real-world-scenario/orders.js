// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

const order = (name, items, totalPrice, status) => {
  return {
    "id": generateUniqueId(),
    "customerName": name,
    "items": items,
    "totalPrice": totalPrice,
    "status": status
  }
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((acc, currentItem) => acc + currentItem.price, 0);
  const orderItem = order(customerName, items, totalPrice, 'Menunggu')
  orders.push(orderItem)
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const getOrder = orders.find( data => data.id == orderId );
  getOrder.status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  let price = 0
  orders.forEach( data => {
    if (data.status == "Selesai") {
      price += data.totalPrice
    }
  })
  return price
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const getOrders = orders.filter( data => data.id != id );
  orders = getOrders
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
