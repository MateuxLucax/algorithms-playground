export default class Graph<T> {
  private _adjacencyList: Map<T, T[]>;

  constructor(map: Map<T, T[]>) {
    this._adjacencyList = map;
  }

  addEdge(origin: T, destination: T): void {
    if (!this._adjacencyList.has(origin)) {
      this._adjacencyList.set(origin, []);
    }

    this._adjacencyList.get(origin)?.push(destination);
  }

  successors(currentNode: T): T[] {
    const successors = this._adjacencyList.get(currentNode);
    if (successors === undefined) return [];

    return successors;
  }

  predecessors(currentNode: T): T[] {
    const predecessors: T[] = [];

    for (const [key, value] of this._adjacencyList) {
      if (value.includes(currentNode)) predecessors.push(key);
    }

    return predecessors;
  }


  get adjacencyList(): Map<T, T[]> {
    return this._adjacencyList;
  }
}
