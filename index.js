class SortedList {
  constructor() {
    this.items = [];
    this.length = 0; 
  }

  add(item) {}
  //  this.items.push(item);
  //  this.items.sort();

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
