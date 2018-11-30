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
  it('creates a Graph', () => {
    const graph = new Graph();
    expect(graph._adjacencyList).toEqual(new Map());
  });

  it('creates a Graph', () => {
    const graph = new Graph();
    expect(graph).toEqual(new Graph());
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

