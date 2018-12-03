'use strict';
const util = require('util');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    const adjancencies = this._adjacencyList.get(startVertex);
    adjancencies.push(new Edge(endVertex, weight));
  }

  getNodes() {
    const all = this._adjacencyList;
    console.log(all);
    return all;
  }

  getNeighbors(vertex) {
    if(!this._adjacencyList.has(vertex)) {
      throw new Error('__ERROR__ Invalid Nodes');
    }

    return [...this._adjacencyList.get(vertex)];
  }

  size() {
    return this._adjacencyList.size;
  }
  
  bfs(startNode) {
    let queue = [];
    let visited = new Set();
    queue.push(startNode);
    visited.add(startNode);

    while(queue.length) {
      let current = queue.shift();
      let neighbors = this.getNeighbors(current);
      for( let neighbor of neighbors) {
        let neighborNode = neighbor.vertex;
        if(!visited.has(neighborNode)) {
          visited.add(neighborNode);
        } 
        queue.push(neighborNode);
      }
    }
    console.log(visited);
    return visited;
  }

  dfs(startNode) {
  }
  
}

module.exports = {
  Vertex,
  Graph
};

// export default {
//   Vertex,
//   Edge,
//   Graph
// };


const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
// graph.addDirectedEdge(ten, seven);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);


// console.log(util.inspect(graph, false, null, true));
// console.log(util.inspect(graph.bfs(ten), false, null, true));
// console.log(util.inspect(graph.dfs(ten), false, null, true));