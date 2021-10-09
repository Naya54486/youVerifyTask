const compString = (s1) => {
    let charMap = new Map();

    for (let i = 0; i < s1.length; i++) {
        charMap.set(s1[i], charMap.get(s1[i]) + 1 || 1);
    }

    let s = '',
        mapKeys = charMap.keys(),
        mapValues = charMap.values();
    charMap.forEach(function(value, key, map) {
        s += key + value;
    });

    return s;
}

let a = "aaabbccccaa";
console.log(compString(a));