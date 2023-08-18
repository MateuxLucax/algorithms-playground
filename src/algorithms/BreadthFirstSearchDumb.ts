import Queue from '../models/Queue.ts';
import BaseAlgorithm from './BaseAlgo.ts';

export default class BreadthFirstSearchDumb extends BaseAlgorithm<string> {
  search(): string[] | false {
    const openSet = new Queue<string>();
    openSet.enqueue(this._initialState);

    while (openSet.isNotEmpty) {
      const currentNode = openSet.dequeue();

      if (currentNode === undefined) return false;
      if (this.isGoalState(currentNode)) return this.solution();

      openSet.enqueueMany(this._graph.successors(currentNode));
    }

    return false;
  }
}
