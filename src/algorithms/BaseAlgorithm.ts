import Graph from '../models/Graph.ts';
import Node from '../models/Node.ts';

export default class BaseAlgorithm {
  protected graph: Graph;
  protected initialState: Node;
  protected metaState: Node;

  constructor(graph: Graph, initialState: Node, metaState: Node) {
    this.graph = graph;
    this.initialState = initialState;
    this.metaState = metaState;
  }

  protected isGoal(currentNode: Node): boolean {
    return currentNode.label === this.metaState.label;
  }

  protected solution(currentNode: Node): string[] {
    const solution: string[] = [];
    let node: Node | undefined = currentNode;

    while (node) {
      solution.push(node.label);
      node = node.parent;
    }

    return solution.reverse();
  }

  protected successors(currentNode: Node): Node[] {
    const successors: Node[] = [];
    const adjacentVertices = this.graph.getAdjacentVertices(currentNode.label);

    if (adjacentVertices === undefined) return successors;

    for (const adjacentVertex of adjacentVertices) {
      const successor = new Node({
        value: adjacentVertex.weight,
        label: adjacentVertex.vertex,
        parent: currentNode
      });
      successors.push(successor);
      currentNode.addChild(successor);
    }

    return successors;
  }
}
