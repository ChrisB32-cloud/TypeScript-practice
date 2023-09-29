// -- ENUMS BEHIDE THE SCENES --
// Refer to complied js file to see whats happening behide the scene with enums
// Behide the scense bascially it's an object that's, that's
// an immdentlly invoked function expression wrapped around it
var NewOrderStatus;
(function (NewOrderStatus) {
    NewOrderStatus[NewOrderStatus["PENDING"] = 0] = "PENDING";
    NewOrderStatus[NewOrderStatus["SHIPPED"] = 1] = "SHIPPED";
    NewOrderStatus[NewOrderStatus["DELIVERED"] = 2] = "DELIVERED";
    NewOrderStatus[NewOrderStatus["RETURNED"] = 3] = "RETURNED";
})(NewOrderStatus || (NewOrderStatus = {}));
// If we were to add the const key word it would remove the whole enum
// and for status in the object it would be set to 0
// enum will create new code with using enums
var newOrder = {
    order: 3456345234,
    status: NewOrderStatus.PENDING,
};
var newOrder_1 = {
    order: 3456345234,
    status: NewOrderStatus.PENDING,
};
