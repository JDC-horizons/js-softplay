// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}

function leave(numAdults, numChildren) {
  const tempAdults = adults - numAdults
  const tempChildren = children - numChildren
  if (
    numChildren > numAdults ||
    tempChildren > tempAdults ||
    tempAdults < 0 ||
    tempChildren < 0
  ) {
    return false
  } else {
    adults = tempAdults
    children = tempChildren
    return true
  }
}

function occupancy() {
  const occupants = {
    adults: adults,
    children: children
  }
  return occupants
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
