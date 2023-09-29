// -- ENUMS BEHIDE THE SCENES --

// Refer to complied js file to see whats happening behide the scene with enums

// Behide the scense bascially it's an object that's, that's
// an immdentlly invoked function expression wrapped around it

enum NewOrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

// If we were to add the const key word it would remove the whole enum
// and for status in the object it would be set to 0

// enum will create new code with using enums

const newOrder = {
  order: 3456345234,
  status: NewOrderStatus.PENDING,
};

// If we were to add the const key word it would remove the whole enum
// and for status in the object it would be set to 0

const enum NewOrderStatus_1 {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const newOrder_1 = {
  order: 3456345234,
  status: NewOrderStatus.PENDING,
};
