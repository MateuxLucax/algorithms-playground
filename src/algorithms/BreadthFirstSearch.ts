import Queue from '../models/Queue.ts';
import Node from '../models/Node.ts';
import BaseAlgorithm from './BaseAlgorithm.ts';

export default class BreadthFirstSearch extends BaseAlgorithm {
  private _visited: Map<string, boolean> = new Map();

  search(): string[] | false {
    const openSet = new Queue<Node>();
    openSet.enqueue(this.initialState);

    while (openSet.isNotEmpty) {
      const currentNode = openSet.dequeue();

      if (currentNode === undefined) return false;
      if (this.isGoal(currentNode)) return this.solution(currentNode);
      if (this._visited.get(currentNode.label)) continue;

      this._visited.set(currentNode.label, true);
      openSet.enqueueMany(this.successors(currentNode));
    }

    return false;
  }
}
