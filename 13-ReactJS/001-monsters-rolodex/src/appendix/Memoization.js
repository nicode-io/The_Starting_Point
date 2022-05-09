function addTo80(n) {
    console.log('No memo: Takes a long time');
    return n + 80;
}

addTo80(5);
addTo80(5);
addTo80(5);

let cache = {};

function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log('Memo: Takes a long time');
        cache[n] = n + 80;
        return cache[n];
    }
}

memoizedAddTo80(5);
memoizedAddTo80(5);
memoizedAddTo80(5);
