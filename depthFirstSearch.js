'use strict';

const Node = require('./graphGenerator');

const DFS = (start, searchFor) => {
  console.log(start.neighbors[0].neighbors);
    for(let i = 0; i < start.neighbors; i++) {
      console.log(i, start.neighbors[i])
    }
}

module.exports = DFS;
