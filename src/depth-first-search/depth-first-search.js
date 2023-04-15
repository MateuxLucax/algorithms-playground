import GraphA from "../graphs/GraphA.js";

class Node {
  constructor(state, depth, path) {
    this.state = state;
    this.depth = depth;
    this.path = path;
  }
}

function isGoal(state, goalState) {
  return state === goalState;
}

function solution(node) {
  return node.path;
}

function successors(node, graph) {
  const neighbors = graph[node.state];
  return neighbors.map(neighbor => new Node(neighbor, node.depth + 1, [...node.path, neighbor]));
}

function depthSearch(initialState, goalState, m, graph) {
  const added = [];
  const updated = [];
  const open = [];

  open.push(new Node(initialState, 0, [initialState]));
  added.push(open[0].state);

  while (open.length > 0) {
    const current = open.pop();
    updated.push(current.state);

    if (isGoal(current.state, goalState)) {
      log(added, updated)
      return solution(current);
    }

    if (current.depth < m) {
      const currentSuccessors = successors(current, graph);
      currentSuccessors.sort((a, b) => a.state.localeCompare(b.state));
      for (const successor of currentSuccessors) {
        open.push(successor);
        added.push(successor.state);
      }
    }
  }

  log(added, updated)
  return "Solution not found";
}

function log(added, updated) {
  console.log(`The following values were added to the open stack: (${added.length}) ${added.join(',')}`);
  console.log(`The following values were stored in the current variable: (${updated.length}) ${updated.join(',')}`);
}

function iterativeDepthSearch(initialState, goalState, depth, graph) {
  while (true) {
    console.log(`Depth m = ${depth}`);
    const solution = depthSearch(initialState, goalState, depth, graph);
    console.log('------------------------');
    if (solution !== "Solution not found") {
      return solution;
    }
    depth += 1;
  }
}

const initialState = 'c';
const goalState = 'm';
const result = iterativeDepthSearch(initialState, goalState, 1, GraphA);
console.log(`Result: ${result instanceof Array ? result.join(',') : result}`);
