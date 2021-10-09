function checkString(str1, str2) {
    let diff = 0
    if (str1.length === str2.length) {
        return true;
    }
    let lengthDiff = Math.abs(str1.length - str2.length)
    if (lengthDiff > 1) {
        return false;
    }

    for (let i = 0; (i < str1.length || i < str2.length); i++) {
        if (diff > 1) {
            return false;
        }
        if (str1.charAt(i) !== str2.charAt(i)) {
            diff++
        }
    }
    if (diff <= 1) {
        return true;
    } else {
        return false;
    }
}
console.log(checkString("pale", "bale"));