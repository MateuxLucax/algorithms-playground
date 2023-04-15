import GraphA from "../graphs/GraphA.js";

class Node {
  constructor(state, parent = null) {
    this.state = state;
    this.parent = parent;
  }
}

function bidirectionalSearch(initialState, goalState) {
  const openUp = [];
  const openDown = [];
  const visitedUp = new Set([initialState]);
  const visitedDown = new Set([goalState]);

  openUp.push(new Node(initialState));
  openDown.push(new Node(goalState));

  while (openUp.length > 0 && openDown.length > 0) {
    let upNode = openUp.pop();
    if (containsNode(openDown, upNode)) {
      return solution(connect(upNode, openDown));
    }
    addSuccessors(openUp, upNode, visitedUp);

    let downNode = openDown.shift();
    if (containsNode(openUp, downNode)) {
      return solution(connect(downNode, openUp));
    }
    addPredecessors(openDown, downNode, visitedDown);
  }

  return "Solution not found";
}

function containsNode(queue, node) {
  return queue.some(n => n.state === node.state);
}

function connect(node, queue) {
  const targetNode = queue.find(n => n.state === node.state);
  let currentNode = targetNode;
  let parentNode = node;
  while (currentNode.parent) {
    parentNode = new Node(currentNode.parent.state, parentNode);
    currentNode = currentNode.parent;
  }
  return parentNode;
}

function solution(node) {
  const path = [];

  while (node) {
    path.unshift(node.state);
    node = node.parent;
  }

  return path;
}

function addSuccessors(queue, node, visited) {
  const successors = GraphA[node.state] || [];

  successors.sort((a, b) => b.localeCompare(a));
  successors.forEach(successor => {
    if (!containsNode(queue, new Node(successor)) && !visited.has(successor)) {
      queue.push(new Node(successor, node));
      visited.add(successor);
    }
  });
}

function addPredecessors(queue, node, visited) {
  const predecessors = GraphA[node.state] || [];

  predecessors.sort((a, b) => b.localeCompare(a));
  predecessors.forEach(predecessor => {
    if (!containsNode(queue, new Node(predecessor)) && !visited.has(predecessor)) {
      queue.unshift(new Node(predecessor, node));
      visited.add(predecessor);
    }
  });
}

const initialState = 'c';
const goalState = 'm';
console.log(bidirectionalSearch(initialState, goalState));
