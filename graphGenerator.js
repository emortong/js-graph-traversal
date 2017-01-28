const Node = class Node {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.neighbors = [];
  }

  addNeighbors(arr) {
    if(this.neighbors.length !== 0 && arr !== undefined) {
      this.neighbors.concat(arr);
    } else if(this.neighbors.length === 0 && arr !== undefined) {
      this.neighbors = arr;
    }
    return this.neighbors;
  }

  getNeighbors() {
    return this.neighbors;
  }
}

module.exports = Node;
