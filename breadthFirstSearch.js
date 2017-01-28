'use strict';

const Node = require('./graphGenerator');

const BFS = (start) => {
   let path = [start.name];
   let queue = [start];
   let currNode;

   while(queue.length !== 0) {
    currNode = queue.shift();

    currNode.neighbors.forEach( w => {
      if(path.indexOf(w) === -1) {
        path.push(w.name);
        queue.push(w);
        currNode = w;
      }
    })
   }

   if(queue.length === 0) {
    return path;
   }

}

module.exports = BFS;
