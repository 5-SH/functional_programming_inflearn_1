// log
const log = console.log;

// curry
const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

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

const takeAll = take(Infinity);

// 지연평가 함수
const L = {};

L.range = function* (l) {
  let i = -1;
  while (++i < l) {
    yield i;
  }
};

L.map = curry(function *(f, iter) {
  for (const a of iter) {
    yield f(a);
  }
});

L.filter = curry(function *(f, iter) {
  for (const a of iter) {
    if (f(a)) yield a;
  }
});

// map
const map = curry(pipe(
  L.map,
  takeAll
));

// filter
const filter = curry(pipe(
  L.filter,
  takeAll
));

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

const range = function(l) {
  let i = -1;
  let res = [];
  while (++i < l) {
    res.push(i);
  }
  return res;
};
