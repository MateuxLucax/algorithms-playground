export default class Queue<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  enqueue(item: T): void {
    this.elements.push(item);
  }

  enqueueMany(items: T[]): void {
    this.elements.push(...items);
  }

  dequeue(): T | undefined {
    return this.elements.shift();
  }

  get front(): T | undefined {
    return this.elements[0];
  }

  get isEmpty(): boolean {
    return this.elements.length === 0;
  }

  get isNotEmpty(): boolean {
    return this.elements.length > 0;
  }

  get size(): number {
    return this.elements.length;
  }

  clear(): void {
    this.elements = [];
  }

  get asArray(): T[] {
    return this.elements;
  }
}