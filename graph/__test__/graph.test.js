'use strict';

const {Vertex, Edge, Graph } = require('../graph.js');

// import { Vertex, Edge, Graph } from '../graph.js';

describe('Testing Vertex', () => {
  it('creates a Vertex with a value of 10', () => {
    const ten = new Vertex(10);
    expect(ten.value).toBe(10)
  });

  it('creates a Vertex with a value of one', () => {
    const one = new Vertex(1);
    expect(one.value).toBe(1)
  });

  it('creates a Vertex with a value of 5', () => {
    const five = new Vertex(5);
    expect(five.value).toBe(5)
  });
});

describe('Testing Graph', () => {
  it('Graph._adjacencyList is an instance of Map', () => {
    const graph = new Graph();
    // expect(graph._adjacencyList).toEqual(new Map());
    expect(graph._adjacencyList).toBeInstanceOf(Map);

  });

  it('Graph is an instance of Graph', () => {
    const graph = new Graph();
    // expect(graph).toEqual(new Graph());
    expect(graph).toBeInstanceOf(Graph);

  });
});

describe('Testing Edge', () => {
  it('creates a directed Edge', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const one = new Vertex(1);
    graph.addVertex(ten);
    graph.addVertex(one);
    graph.addDirectedEdge(ten, one);
    expect(graph._adjacencyList.get(ten)[0].vertex.value).toEqual(1);
  });

  it('creates two directed Edges', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const one = new Vertex(1);
    const five = new Vertex(5);
    graph.addVertex(ten);
    graph.addVertex(one);
    graph.addVertex(five);
    graph.addDirectedEdge(ten, one);
    graph.addDirectedEdge(ten, five);
    expect(graph._adjacencyList.get(ten)[0].vertex.value).toEqual(1);
    expect(graph._adjacencyList.get(ten)[1].vertex.value).toEqual(5);
  });
});

describe('Testing the Neighbors', () => {
  it('Length of Neighbors is 3', () => {
    const graph = new Graph();
    const ten = new Vertex(10);
    const one = new Vertex(1);
    const five = new Vertex(5);
    const seven = new Vertex(7);

    graph.addVertex(ten);
    graph.addVertex(one);
    graph.addVertex(five);
    graph.addVertex(seven);

    graph.addDirectedEdge(ten, one);
    graph.addDirectedEdge(ten, five);
    graph.addDirectedEdge(ten, seven);

    expect(graph.getNeighbors(ten).length).toBe(3);
  });
})