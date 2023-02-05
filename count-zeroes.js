function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    if (arr[0] === 0) {
        return arr.length
    }

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 1) {
            // middleVal is 1, look at the right half to find first 0
            if (arr[middleIdx + 1] === 0) {
                return (arr.length - 1) - (middleIdx)
            } else {
                leftIdx = middleIdx + 1;
            }
        } else if (middleVal === 0) {
            // middleVal is 0, look at the left half to find first 0
            if (arr[middleIdx - 1] === 1) {
                return (arr.length - 1) - (middleIdx - 1)
            } else {
                rightIdx = middleIdx - 1;
            }
        }
    }

    // left and right pointers crossed, val isn't in arr
    return 0;
}

module.exports = countZeroes