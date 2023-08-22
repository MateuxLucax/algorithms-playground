import { assertEquals } from 'https://deno.land/std@0.198.0/assert/assert_equals.ts';

import BreadthFirstSearch from './algorithms/BreadthFirstSearch.ts';
import ExampleGraph from './examples/ExampleGraph.ts';
import Node from './models/Node.ts';
import DepthLimitedSearch from './algorithms/DepthLimitedSearch.ts';
import IterativeDepthLimitedSearch from './algorithms/IterativeDepthLimitedSearch.ts';

const metaState = new Node({ value: 0, label: 'M' });
const initialState = new Node({ value: 0, label: 'C' });

const expectedSolution = ['C', 'H', 'K', 'M'];

Deno.bench('Breadth First Search Algorithm', () => {
  const algorithm = new BreadthFirstSearch(ExampleGraph, initialState, metaState);
  const solution = algorithm.search();
  assertEquals(solution, expectedSolution);
});

Deno.bench('Depth Limited Search Algorithm', () => {
  const algorithm = new DepthLimitedSearch(ExampleGraph, initialState, metaState);
  const solution = algorithm.search(4);
  assertEquals(solution, expectedSolution);
});

Deno.bench('Iterative Depth Limited Search Algorithm', () => {
  const algorithm = new IterativeDepthLimitedSearch(ExampleGraph, initialState, metaState);
  const solution = algorithm.search(4);
  assertEquals(solution, expectedSolution);
});
