module.exports = class Node {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.neighbors = [];
  }

  addNeighbors(arr) {
    if(this.neighbors.length !== 0 && arr !== undefined) {
      this.neighbors = this.neighbors.concat(arr);
    } else if(this.neighbors.length === 0 && arr !== undefined) {
      return this.neighbors = arr;
    }
    return this.neighbors;
  }

  getNeighbors() {
    return this.neighbors;
  }
}

