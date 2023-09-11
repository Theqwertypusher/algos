const PERFORMANCE_TEST_SET = [1, 10, 100, 1000, 10000, 20000];

const getPerformance = (cb) => {
  console.log(`Running ${cb.name}`);

  PERFORMANCE_TEST_SET.forEach((size) => {
    const start = performance.now();
    cb(Array.apply(null, { length: size })).map(() => {}, Math.random);
    const end = performance.now();
    const timeTaken = end - start;
    console.log(`N = ${size} -> ${timeTaken.toFixed(3)}ms`);
  });
};

module.exports = { getPerformance };
