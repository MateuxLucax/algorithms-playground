import Node from "../models/Node.ts";
import Stack from "../models/Stack.ts";
import BaseAlgorithm from "./BaseAlgorithm.ts";

export default class IterativeDepthLimitedSearch extends BaseAlgorithm {
    search(limit: number): string[] | false {
    for(let i = 0; i < limit; i++) {
      const result = this.iterativeSearch(i);
      if (result) return result;
    }

    return false;
  }

  private iterativeSearch(limit: number): string[] | false {
    const openStack = new Stack<Node>();
    openStack.push(this.initialState);

    while (openStack.isNotEmpty) {
      const currentNode = openStack.pop();

      if (currentNode === undefined) return false;
      if (this.isGoal(currentNode)) return this.solution(currentNode);
      if (currentNode.depth || 0 < limit) {
        openStack.pushMany(this.successors(currentNode));
      }
    }

    return false;
  }
}
