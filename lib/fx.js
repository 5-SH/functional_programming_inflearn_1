// log
const log = console.log;

// curry
const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

// map
const map = curry((f, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(f(a));
  }
  
  return res;
});

// filter
const filter = curry((f, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) res.push(a);
  }
  return res;
});

// reduce
const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    acc = f(acc, a);
  }
  return acc;
});

// go
const go = (...args) => reduce((a, f) => f(a), args);

// pipe
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

// take
const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

const range = function(l) {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};

// 지연평가 함수
const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

L.map = curry(function *(f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    yield f(a);
  }
});

L.filter = curry(function *(f, iter) {
  iter = iter[Symbol.iterator]();
  let cur;
  while(!(cur = iter.next()).done) {
    const a = cur.value;
    if (f(a)) yield a;
  }
});

