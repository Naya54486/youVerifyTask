// isUnique: Implement an algorithm to determine if a string has all unique 
//characters. What if you cannot use additional data structure


function isUnique(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 1 + i; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
        
}

console.log(isUnique('sherif'))