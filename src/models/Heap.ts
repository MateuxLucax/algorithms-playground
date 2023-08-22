export default class Heap<T> {
  heap: T[];
  compare: (a: T, b: T) => number;

  constructor(compare: (a: T, b: T) => number) {
    this.heap = [];
    this.compare = compare;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  private heapifyUp(index: number): void {
    const parentIndex = this.getParentIndex(index);
    if (parentIndex >= 0 && this.compare(this.heap[index], this.heap[parentIndex]) > 0) {
      this.swap(index, parentIndex);
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number): void {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let largestIndex = index;

    if (leftChildIndex < this.heap.length && this.compare(this.heap[leftChildIndex], this.heap[largestIndex]) > 0) {
      largestIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.compare(this.heap[rightChildIndex], this.heap[largestIndex]) > 0) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      this.swap(index, largestIndex);
      this.heapifyDown(largestIndex);
    }
  }

  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  extractTop(): T | undefined {
    if (this.heap.length === 0) {
      return undefined;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.heapifyDown(0);

    return top;
  }

  peekTop(): T | undefined {
    return this.heap.length > 0 ? this.heap[0] : undefined;
  }

  size(): number {
    return this.heap.length;
  }
}
