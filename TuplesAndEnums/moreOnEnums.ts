// -- MORE ON ENUMS --

// When we create a enum and don't specify any value
// TypeScript will assign a numeric value starting
// at zero and going up from there

// ex
enum MyResponse_5 {
  no, // 1
  yes, // 2
  maybe, // 3
}

// However if we assign a value to a varible, the value
// will start from that point and not zero and increment from there

// ex
enum MyResponse_6 {
  no = 10, // 10
  yes, // 11
  maybe, // 12
}

// We commonly would use enums to work with number but
// we can also use strings instead

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

ArrowKeys.UP;

// Enums don't have to be homogenous, they can
// have different types

// ex
enum ArrowKeys_1 {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
  ERROR = 9873,
}

ArrowKeys_1.UP;
ArrowKeys_1.ERROR;
