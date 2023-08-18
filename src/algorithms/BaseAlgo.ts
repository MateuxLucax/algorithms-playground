import Graph from '../models/Graph.ts';

export default class BaseAlgorithm<T> {
  protected _graph: Graph<T>;
  protected _visited: Map<T, boolean>;
  protected _initialState: T;
  protected _metaState: T;

  constructor(graph: Graph<T>, initialState: T, metaState: T) {
    this._graph = graph;
    this._initialState = initialState;
    this._metaState = metaState;
    this._visited = new Map<T, boolean>();
  }

  protected isGoalState(currentNode: T): boolean {
    return currentNode === this._metaState;
  }

  protected solution(current: T = this._metaState): T[] {
    const solution = [current];

    while (current !== this._initialState) {
      const predecessors = this._graph.predecessors(current);
      if (predecessors.length === 0) return [];
      current = predecessors[0];
      solution.push(current);
    }

    return solution.reverse();
  }
}
