import Graph from "../models/Graph.ts";
import Stack from "../models/Stack.ts";
import BaseAlgorithm from "./BaseAlgo.ts";

class Node {
  constructor(public value: string, public depth: number) { }
}

export default class DepthLimitedSearch extends BaseAlgorithm<string> {
  private _limit: number;

  constructor(graph: Graph<string>, initialState: string, metaState: string, limit: number) {
    super(graph, initialState, metaState);
    this._limit = limit;
  }

  search(): string[] | false {
    const openStack: Stack<Node> = new Stack<Node>();
    openStack.push(new Node(this._initialState, 0));

    while (openStack.isNotEmpty) {
      const currentNode = openStack.pop();

      if (currentNode === undefined) return false;
      if (this.isGoalState(currentNode.value)) return this.solution();
      if (currentNode.depth < this._limit) {
        const successors = this._graph.successors(currentNode.value);
        successors.forEach((successor) => {
          openStack.push(new Node(successor, currentNode.depth + 1));
        });
      }
    }

    return false;
  }
}
