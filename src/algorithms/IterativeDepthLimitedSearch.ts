import Graph from "../models/Graph.ts";
import Stack from "../models/Stack.ts";
import BaseAlgorithm from "./BaseAlgo.ts";

type Node = {
  value: string;
  depth: number;
}

export default class IterativeDepthLimitedSearch extends BaseAlgorithm<string> {
  private _limit: number;

  constructor(graph: Graph<string>, initialState: string, metaState: string, limit: number) {
    super(graph, initialState, metaState);
    this._limit = limit;
  }

  search(): string[] | false {
    for(let i = 0; i < this._limit; i++) {
      const result = this.iterativeSearch(i);
      if (result) return result;
    }

    return false;
  }

  private iterativeSearch(limit: number): string[] | false {
    const openStack: Stack<Node> = new Stack<Node>();
    openStack.push({ value: this._initialState, depth: 0 });

    while (openStack.isNotEmpty) {
      const currentNode = openStack.pop();

      if (currentNode === undefined) return false;
      if (this.isGoalState(currentNode.value)) return this.solution();
      if (currentNode.depth < limit) {
        const successors = this._graph.successors(currentNode.value);
        successors.forEach((successor) => {
          openStack.push({ value: successor, depth: currentNode.depth + 1 });
        });
      }
    }

    return false;
  }
}
