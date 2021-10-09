// Check Permutation: Given two strings, write a method to decide if one is a permutation of the other



function isPerm(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    res = str1.split("").sort().join() === str2.split("").sort().join();
    console.log(res);

}

isPerm("level", "velel");