import { assertEquals } from 'https://deno.land/std@0.198.0/assert/assert_equals.ts';

import BreadthFirstSearch from './algorithms/BreadthFirstSearch.ts';
import BreadthFirstSearchDumb from './algorithms/BreadthFirstSearchDumb.ts';
import ExampleGraph from './examples/ExampleGraph.ts';
import DepthLimitedSearch from './algorithms/DepthLimitedSearch.ts';
import IterativeDepthLimitedSearch from './algorithms/IterativeDepthLimitedSearch.ts';

Deno.bench('Breadth First Search Algorithm', () => {
  const bfs = new BreadthFirstSearchDumb(ExampleGraph, 'A', 'M');
  const solution = bfs.search();
  assertEquals(solution, ['A', 'H', 'K', 'M']);
});

Deno.bench('Breadth First Search Algorithm (with optimization)', () => {
  const bfs = new BreadthFirstSearch(ExampleGraph, 'A', 'M');
  const solution = bfs.search();
  assertEquals(solution, ['A', 'H', 'K', 'M']);
});

Deno.bench('Depth Limited Search Algorithm', () => {
  const bfs = new DepthLimitedSearch(ExampleGraph, 'A', 'M', 5);
  const solution = bfs.search();
  assertEquals(solution, ['A', 'H', 'K', 'M']);
});

Deno.bench('Iterative Depth Limited Search Algorithm', () => {
  const bfs = new IterativeDepthLimitedSearch(ExampleGraph, 'A', 'M', 5);
  const solution = bfs.search();
  assertEquals(solution, ['A', 'H', 'K', 'M']);
});
