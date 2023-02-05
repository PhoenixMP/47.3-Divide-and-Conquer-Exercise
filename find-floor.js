function findFloor(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    if (arr[0] > val) return -1;
    if (arr[rightIdx] < val) return arr[rightIdx];

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];
        console.log(middleIdx)

        if (middleVal < val && arr[middleIdx + 1] < val) {
            // middleVal is too small, look at the right half
            leftIdx = middleIdx;
        } else if (middleVal > val && arr[middleIdx + 1] > val) {
            // middleVal is too large, look at the left half
            rightIdx = middleIdx;
        } else {
            // we found our value!
            return middleVal;
        }
    }

    // left and right pointers crossed, val isn't in arr
    return -1;
}


module.exports = findFloor