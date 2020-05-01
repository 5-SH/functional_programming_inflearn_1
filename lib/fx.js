// log
const log = console.log;

// curry
const curry = (f) => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

// map
const map = curry((f, iter) => {
  let res = [];
  for (const p of iter) {
    res.push(f(p));
  }
  return res;
});

// filter
const filter = curry((f, iter) => {
  let res = [];
  for (const a of iter) {
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
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
});

// go
const go = (...args) => reduce((a, f) => f(a), args);

// pipe
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
