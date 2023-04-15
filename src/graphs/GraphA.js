const GraphA = {
  a: ['b', 'h'],
  b: ['a', 'c'],
  c: ['b', 'd', 'h'],
  d: ['c', 'e'],
  e: ['d', 'f'],
  f: ['e', 'g'],
  g: ['f', 'j'],
  h: ['a', 'c', 'i', 'k'],
  i: ['h', 'l', 'j'],
  j: ['g', 'i', 'l'],
  k: ['h', 'm'],
  l: ['i', 'j', 'm'],
  m: ['k', 'l', 'n', 'o'],
  n: ['m'],
  o: ['m', 'p', 'r'],
  p: ['o', 'q'],
  q: ['p'],
  r: ['o', 's'],
  s: ['r', 't'],
  t: ['s'],
};

export default GraphA;