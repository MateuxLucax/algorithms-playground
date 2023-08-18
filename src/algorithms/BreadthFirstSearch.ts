import Queue from '../models/Queue.ts';
import BaseAlgorithm from './BaseAlgo.ts';

export default class BreadthFirstSearch extends BaseAlgorithm<string> {
  search(): string[] | false {
    const openSet = new Queue<string>();
    openSet.enqueue(this._initialState);

    while (openSet.isNotEmpty) {
      const currentNode = openSet.dequeue();

      if (currentNode === undefined) return false;
      if (this.isGoalState(currentNode)) return this.solution();
      if (this._visited.get(currentNode)) continue;

      this._visited.set(currentNode, true);
      openSet.enqueueMany(this._graph.successors(currentNode));
    }

    return false;
  }
}
