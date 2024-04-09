function memoize(func2) {
    let prevArgs = null;
    let prevResult = null;

    return function(...args) {
        if (prevArgs && prevArgs.length === args.length && args.every((value, index) => value === prevArgs[index])) {
            return prevResult;
        } else {
            prevArgs = args;
            prevResult = func2(...args);
            return prevResult;
        }
    };
}

function sum(a, b, c=0) {
    console.log('called');
    return a + b + c;
}

const memoFunc = memoize(sum);
const b = memoFunc(3, 4, 5);
const a = memoFunc(3,4);
const c = memoFunc(3, 4);
console.log(b, a, c);
