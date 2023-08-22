export default class Graph {
  private adjacencyList: Map<string, { vertex: string, weight: number }[]>;
  private isDirected: boolean;

  constructor(isDirected = false) {
    this.adjacencyList = new Map();
    this.isDirected = isDirected;
  }

  static of(isDirected = false): Graph {
    return new Graph(isDirected);
  }

  addVertex(vertex: string): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source: string, destination: string, weight: number): this {
    if (!this.adjacencyList.has(source)) this.addVertex(source);
    if (!this.adjacencyList.has(destination)) this.addVertex(destination);

    this.adjacencyList.get(source)?.push({ vertex: destination, weight });
    if (!this.isDirected) {
      this.adjacencyList.get(destination)?.push({ vertex: source, weight });
    }

    return this;
  }

  getVertex(vertex: string): { vertex: string, weight: number }[] | undefined {
    return this.adjacencyList.get(vertex);
  }

  getAdjacentVertices(vertex: string): { vertex: string, weight: number }[] | undefined{
    return this.adjacencyList.get(vertex);
  }

  print(): void {
    const vertices = this.adjacencyList.keys();

    for (const vertex of vertices) {
      const values = this.adjacencyList.get(vertex)!;
      let output = "";

      for (const value of values) {
        output += `${value.vertex}(${value.weight}) `;
      }
    }
  }
}