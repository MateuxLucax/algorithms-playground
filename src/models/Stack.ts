export default class Stack<T> {
  private elements: T[];

  constructor() {
    this.elements = [];
  }

  push(item: T): void {
    this.elements.push(item);
  }

  pushMany(items: T[]): void {
    this.elements.push(...items);
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  get top(): T | undefined {
    return this.elements[this.elements.length - 1];
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
}