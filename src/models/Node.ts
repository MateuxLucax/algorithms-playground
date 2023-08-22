export default class Node {
  value: number;
  label: string;
  parent?: Node;
  children: Node[];
  depth?: number;

  constructor(
    { value, label, parent, depth }:
    { value: number, label: string, parent?: Node, depth?: 0 }
  ) {
    this.children = [];
    this.value = value;
    this.label = label;
    this.parent = parent;
    if (parent) this.depth = parent.depth ? parent.depth + 1 : 1;
    else this.depth = depth;
  }

  addChild(child: Node) {
    this.children.push(child);
  }

  find(label: string): Node | undefined {
    if (this.label === label) return this;

    for (const child of this.children) {
      const node = child.find(label);
      if (node !== undefined) return node;
    }

    return undefined;
  }

  connectNodes(node: Node) {
    this.children.push(node);
    node.parent = this;
  }
}
