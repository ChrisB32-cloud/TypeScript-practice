// -- INTRO ENUMS --

// Enums allow us to define a set of named constants. We can
// give these constants numeric or string values

// There's quite a few options when it comes to enums
// Enums don't exist in JavaScript

// Numeric Enums
enum MyResponse {
  no, // 1
  yes, // 2
  maybe, // 3
}

enum MyResponse_1 {
  no = 2, // 2
  yes, // 3
  maybe, // 4
}

enum MyResponse_2 {
  no = 2, // 2
  yes = 10, // 10
  maybe = 24, // 24
}

// String Enums
enum MyResponse_3 {
  no = "No",
  yes = "Yes",
  maybe = "Maybe",
}

// Heterogenous Enums
enum MyResponse_4 {
  no = 0,
  yes = 1,
  maybe = "Maybe",
}

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const statusUpdates = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.PENDING);
