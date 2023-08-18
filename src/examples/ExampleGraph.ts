import Graph from "../models/Graph.ts";

export default new Graph(new Map<string, string[]>([
  ['A', ['B', 'H']],
  ['B', ['A', 'C']],
  ['C', ['B', 'D', 'H']],
  ['D', ['C', 'E']],
  ['E', ['D', 'F']],
  ['F', ['E', 'G']],
  ['G', ['F', 'J']],
  ['H', ['A', 'C', 'I', 'K']],
  ['I', ['H', 'J', 'L']],
  ['J', ['G', 'I', 'L']],
  ['K', ['H', 'M']],
  ['L', ['I', 'J', 'M']],
  ['M', ['K', 'L', 'N', 'O']],
  ['N', ['M']],
  ['O', ['M', 'P', 'R']],
  ['P', ['O', 'Q']],
  ['Q', ['P']],
  ['R', ['O', 'S']],
  ['S', ['R', 'T']],
  ['T', ['S']],
]));